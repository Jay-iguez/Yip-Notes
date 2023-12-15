import React, { useState } from "react"
import { Link } from 'react-router-dom'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { StyledContentContainer, StyledContentTopborder, StyledContentbody } from "../../styled-components/Styled";

export default function YipNote({ yip = { yip: 'dogs!', id: '123', text: 'You kow, this is actually going together better than yesterdays lol and im less tired somehow ???' } }) {

    const [value, setValue] = useState(yip.text)

    return (
        <StyledContentContainer>
            <StyledContentTopborder />
            <StyledContentbody>
                <Link to={'/home/navigation-screen'}>
                    <button className="button">Back</button>
                </Link>
                <p>{yip.yip}</p>
                <p>{yip.id}</p>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            </StyledContentbody>
        </StyledContentContainer>
    )
}