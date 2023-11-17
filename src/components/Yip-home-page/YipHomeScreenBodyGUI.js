import { Link } from "react-router-dom";
import { StyledNotesNavigation, StyledCreateNote, StyledKennel, StyledNote, StyledYipHomeScreenGUI_Content, StyledYipHomeScreenGUI_ContentContainer, StyledYipHomeScreenGUI_ContentTopBorder, StyledInfoBoard } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import YipKennelsInfo from "./YipKennelsInfo";
import YipCreate from "./YipCreate";

export default function YipNoteHomeInfo(props) {

    return (
        <>
            <StyledYipHomeScreenGUI_ContentContainer>
                <StyledYipHomeScreenGUI_ContentTopBorder></StyledYipHomeScreenGUI_ContentTopBorder>
                <StyledYipHomeScreenGUI_Content>
                    <YipKennelsInfo kennelRoutes={props.kennelRoutes} setKennelRoutes={props.setKennelRoutes} kennelData={props.kennelData} />

                </StyledYipHomeScreenGUI_Content>
            </StyledYipHomeScreenGUI_ContentContainer>
        </>
    )
}

//<YipCreate />