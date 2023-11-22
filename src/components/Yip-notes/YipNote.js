import React, { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { StyledYipHomeScreenGUI_ContentContainer, StyledYipHomeScreenGUI_Content, StyledYipHomeScreenGUI_ContentTopBorder } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";

export default function YipNote({ yip = { yip: 'dogs!', id: '123', text: 'You kow, this is actually going together better than yesterdays lol and im less tired somehow ???' } }) {

    const [value, setValue] = useState(yip.text)

    return (
        <StyledYipHomeScreenGUI_ContentContainer>
            <StyledYipHomeScreenGUI_ContentTopBorder />
            <StyledYipHomeScreenGUI_Content>
                <button className="button">Back</button>
                <p>{yip.yip}</p>
                <p>{yip.id}</p>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
            </StyledYipHomeScreenGUI_Content>
        </StyledYipHomeScreenGUI_ContentContainer>
    )
}