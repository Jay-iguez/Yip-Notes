import React from "react";
import { StyledCreateNote, StyledYipHomeScreenGUI_Content, StyledYipHomeScreenGUI_ContentContainer, StyledYipHomeScreenGUI_ContentTopBorder } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";

export default function YipCreate(props) {
    const { setToRender } = props

    return (
        <StyledYipHomeScreenGUI_ContentContainer>
            <StyledYipHomeScreenGUI_Content>
                <button className="button" onClick={() => setToRender('kennels-list')}>Back</button>
                        <h3>Name:</h3>
                        <h3>Category:</h3>
                        <h3>Create:</h3>
            </StyledYipHomeScreenGUI_Content>
        </StyledYipHomeScreenGUI_ContentContainer>
    )
}