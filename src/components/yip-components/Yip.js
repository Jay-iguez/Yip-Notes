import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { StyledContentContainer, StyledContentTopborder, StyledContentbody, StyledQuill } from "../../styled-components/Styled";

export default function YipNote(props) {

    const { yip, updater } = props


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
            <StyledContentbody gap={'2rem'}>
                <Link to={'/home/navigation-screen'} onClick={(e) => {
                    if (confirm_leave !== 2) {
                        if (html_value !== value) {
                            set_unsaved(true)
                            set_confirm_leave(confirm_leave + 1)
                            e.preventDefault()
                        }
                    }

                }}>
                    <button className="button corner">Back</button>
                    {
                        unsaved === false ? null :

                            <p className="option message">Unsaved changes! Save before exiting if you wish to do so</p>
                    }

                </Link>
                {
                    !to_change ?

                        <button className='button' onClick={() => set_to_change(!to_change)}>Save Changes</button>

                        :

                        <>
                            <button className="button" onClick={() => {
                                set_to_change(!to_change)
                            }}>Cancel Changes</button>
                            <button className="button" onClick={() => {
                                const payload = { id: yip.yip_id, content: { ...yip, yip_content: value } }
                                updater({ action: 'update_yip_content', payload: payload })
                                set_to_change(!to_change)
                                set_html_value(value)
                                set_confirm_leave(1)
                                if (unsaved === true) {
                                    set_unsaved(false)
                                }
                            }}>Confirm Changes</button>
                        </>
                }

                <StyledQuill>
                    <ReactQuill theme="snow" value={value} onChange={(e) => quill_change(e)} />
                </StyledQuill>
            </StyledContentbody>
        </StyledContentContainer>
    )
}