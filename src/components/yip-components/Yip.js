import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { StyledContentContainer, StyledContentTopborder, StyledContentYipBody, StyledQuill } from "../../styled-components/Styled";

export default function Yip(props) {

    const { yip, kennel_name, updater } = props

    const [start_up_count, set_start_up_count] = useState(0)
    const [content_state, set_content_state] = useState({
        actual_content: yip.yip_content,
        previous_content: yip.yip_content
    })

    const [to_change, set_to_change] = useState(false)
    const [unsaved, set_unsaved] = useState(false)
    const [confirm_leave, set_confirm_leave] = useState(1)

    const quill_change = (e) => {
        set_start_up_count(start_up_count + 1)
        set_content_state({...content_state, actual_content: e})
    }

    useEffect(() => {
        if (start_up_count > 0 && start_up_count <= 2 && content_state.actual_content !== content_state.previous_content) {
            set_content_state({...content_state, previous_content: content_state.actual_content})
        }
    }, [start_up_count])


    return (
        <StyledContentContainer>
            <StyledContentTopborder />
            <StyledContentYipBody>
                <Link to={'/navigation-screen'} onClick={(e) => {
                    if (confirm_leave !== 2) {
                        if (content_state.actual_content !== content_state.previous_content) {
                            e.preventDefault()
                            set_unsaved(true)
                            set_confirm_leave(confirm_leave + 1)
                        }
                    }

                }}>
                    <button className="button corner_left front">Back</button>
                </Link>
                {
                    !to_change ?

                        <button className='button corner_left right front' onClick={() => set_to_change(!to_change)}>Save Changes</button>

                        :

                        <>
                            <button className="button corner_left right save_changes front" onClick={() => {
                                set_to_change(!to_change)
                            }}>Cancel</button>
                            <button className="button corner_left right front" onClick={() => {
                                const payload = { id: yip.yip_id, content: { ...yip, yip_content: content_state.actual_content } }
                                updater({ action: 'update_yip_content', payload: payload })
                                set_to_change(!to_change)
                                set_content_state({...content_state, previous_content: content_state.actual_content})
                                set_start_up_count(0)
                                if (unsaved === true) {
                                    set_unsaved(false)
                                }
                            }}>Confirm</button>
                        </>
                }

                <StyledQuill margin_size={yip.yip_name.length >= 16 || kennel_name.length >= 16 ? '5rem' : '3.5rem'}>
                    {
                        unsaved === false ? null :

                            <div className="value unsaved_message front">Exit without saving?</div>
                    }
                    <div className="yip_info">
                        <div className="value yip_values"><p>{yip.yip_name}</p></div>
                        <div className="value yip_values"><p>{kennel_name}</p></div>
                    </div>
                    <div className="quill_text_box">
                        <ReactQuill theme="snow" value={content_state.actual_content} onChange={(e) => quill_change(e)} />
                    </div>
                </StyledQuill>
            </StyledContentYipBody>
        </StyledContentContainer>
    )
}