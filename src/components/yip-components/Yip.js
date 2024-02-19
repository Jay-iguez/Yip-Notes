import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { StyledContentContainer, StyledContentTopborder, StyledContentYipBody, StyledQuill } from "../../styled-components/Styled";

export default function YipNote(props) {

    const { yip, kennel_name, updater } = props


    const [html_value, set_html_value] = useState()
    const [value, setValue] = useState(yip.yip_content)
    const [to_change, set_to_change] = useState(false)
    const [unsaved, set_unsaved] = useState(false)
    const [confirm_leave, set_confirm_leave] = useState(1)

    let counts = 0

    const quill_change = (e) => {

        counts = counts + 1

        if (counts === 2) {
            set_html_value(e)
            setValue(e)
            counts = 0
        } else {
            setValue(e)
        }
    }

    useEffect(() => {
        set_html_value(value)
    }, [])

    return (
        <StyledContentContainer>
            <StyledContentTopborder />
            <StyledContentYipBody>
                <Link to={'/home/navigation-screen'} onClick={(e) => {
                    if (confirm_leave !== 2) {
                        if (html_value !== value) {
                            set_unsaved(true)
                            set_confirm_leave(confirm_leave + 1)
                            e.preventDefault()
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
                                const payload = { id: yip.yip_id, content: { ...yip, yip_content: value } }
                                updater({ action: 'update_yip_content', payload: payload })
                                set_to_change(!to_change)
                                set_html_value(value)
                                if (unsaved === true) {
                                    set_unsaved(false)
                                }
                            }}>Confirm</button>
                        </>
                }

                <StyledQuill margin_size={yip.yip_name.length >= 16 || kennel_name.length >= 16 ? '4.5rem' : '3.5rem'}>
                    {
                        unsaved === false ? null :

                            <div className="value unsaved_message front">Exit without saving?</div>
                    }
                    <div className="yip_info">
                        <div className="value yip_values"><p>{yip.yip_name}</p></div>
                        <div className="value yip_values"><p>{kennel_name}</p></div>
                    </div>
                    <div className="quill_text_box">
                        <ReactQuill theme="snow" value={value} onChange={(e) => quill_change(e)} />
                    </div>
                </StyledQuill>
            </StyledContentYipBody>
        </StyledContentContainer>
    )
}