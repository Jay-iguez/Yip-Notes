import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { StyledContentContainer, StyledContentTopborder, StyledContentbody, StyledQuill } from "../../styled-components/Styled";

export default function YipNote(props) {

    const { yip, change } = props


    const [html_value, set_html_value] = useState()
    const [value, setValue] = useState(yip.yip_content)
    const [to_change, set_to_change] = useState(false)

    let counts = 0

    const quill_change = (e) => {
        
        counts = counts + 1
      
        if (counts === 2 ){
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
            <StyledContentbody>
                <Link to={'/home/navigation-screen'} onClick={() => {
                    if (html_value !== value){
                        alert(' differnt! ')
                    }
                }}>
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
                            set_html_value(value)
                        }}>Confirm Changes</button>
                        <button className="button" onClick={() => {
                            set_to_change(!to_change)
                        }}>Cancel Changes</button>
                    </>
                }

                <StyledQuill>
                    <ReactQuill theme="snow" value={value} onChange={(e) => quill_change(e)} />
                </StyledQuill>
            </StyledContentbody>
        </StyledContentContainer>
    )
}