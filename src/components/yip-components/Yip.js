import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { StyledContentContainer, StyledContentTopborder, StyledContentbody, StyledQuill } from "../../styled-components/Styled";

export default function YipNote(props) {

    const { yip, change } = props

    const [value, setValue] = useState(yip.yip_content)
    //const [has_value_changed, set_has_value_changed] = useState({initial: false, value: false})
    const [to_change, set_to_change] = useState(false)

    const quill_change = (e) => {
        setValue(e)
    }

    useEffect(() => {
        //set_has_value_changed({...has_value_changed, initial: false, value: false})
    }, [])
    //console.log('value:      ', value,'has:      ',  has_value_c  hanged)

    return (
        <StyledContentContainer>
            <StyledContentTopborder />
            <StyledContentbody>
                <Link to={'/home/navigation-screen'}>
                    <button className="button">Back</button>
                </Link>
                <br></br>
                <br></br>
                {!to_change ?
                    <button className='button' onClick={() => set_to_change(!to_change)}>Save Changes</button>
                    :
                    <>
                        <button className="button" onClick={() => {
                            change(yip.yip_id, { ...yip, yip_content: value })
                            set_to_change(!to_change)
                        }}>Confirm Changes</button>
                        <button className="button" onClick={() => {
                            set_to_change(!to_change)
                        }}>Cancel Changes</button>
                    </>
                }

                <StyledQuill>
                    <ReactQuill theme='snow' value={value} onChange={(e) => { quill_change(e) }} />
                </StyledQuill>
            </StyledContentbody>
        </StyledContentContainer>
    )
}