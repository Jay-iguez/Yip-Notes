import { Link } from "react-router-dom";
import { StyledNotesNavigation, StyledCreateNote, StyledKennel, StyledNote, StyledMainBody, StyledMainBodyBarrier, StyledInfoBoard } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import YipKennelsInfo from "./YipKennelsInfo";
import YipCreate from "./YipCreate";

export default function YipNoteHomeInfo(props) {

    return (
        <>
            <StyledMainBody>
                <StyledMainBodyBarrier>
                    <YipKennelsInfo kennelRoutes={props.kennelRoutes} setKennelRoutes={props.setKennelRoutes} kennelData={props.kennelData} />
                    <YipCreate />
                </StyledMainBodyBarrier>
            </StyledMainBody>
        </>
    )
}