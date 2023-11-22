import React, { useState } from 'react'
import { StyledYipHomeScreenGUI_Content, StyledYipHomeScreenGUI_ContentContainer, StyledYipHomeScreenGUI_ContentTopBorder, StyledInfoBoard } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import YipKennelsInfo from "../YipHomeMenuScreens/YipKennelsScreen";
import Condition from '../child-helpers/Condition';


export default function YipNoteHomeInfo(props) {
    const [currentMenuScreen, setCurrentMenuScreen] = useState('kennels-list')

    return (
        <>
            <StyledYipHomeScreenGUI_ContentContainer>
                <StyledYipHomeScreenGUI_ContentTopBorder />
                <StyledYipHomeScreenGUI_Content>
                    <Condition toRender={currentMenuScreen} setToRender={setCurrentMenuScreen} state={props} />
                </StyledYipHomeScreenGUI_Content>
            </StyledYipHomeScreenGUI_ContentContainer>
        </>
    )
}

//<YipCreate />
// <YipKennelsInfo kennelRoutes={props.kennelRoutes} setKennelRoutes={props.setKennelRoutes} kennelData={props.kennelData} />