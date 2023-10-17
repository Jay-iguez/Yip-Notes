import { Link } from "react-router-dom";
import { StyledNotesNavigation, StyledCreateNote, StyledKennel, StyledNote, StyledMainBody, StyledMainBodyBarrier, StyledInfoBoard } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import YipKennelInfo from "./YipKennelInfo";
import YipCreate from "./YipCreate";

export default function YipNoteHomeInfo () {

    return (
        <StyledMainBody>
            <StyledMainBodyBarrier>
                    <YipKennelInfo />
                    <YipCreate />
                </StyledMainBodyBarrier>
        </StyledMainBody>
    )
}