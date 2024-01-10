import React, { useState } from "react"
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { StyledContentContainer, StyledContentTopborder, StyledContentbody } from "../../styled-components/Styled";

export default function YipNote(props) {

    const { yip, change } = props

    const [value, setValue] = useState(yip.yip_content)

    return (
        <StyledContentContainer>
            <StyledContentTopborder />
            <StyledContentbody>
                <button onClick={() => change(yip.yip_id, { ...yip, yip_content: value })}>Update</button>
                <Link to={'/home/navigation-screen'}>
                    <button className="button">Back</button>
                </Link>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            </StyledContentbody>
        </StyledContentContainer>
    )
}