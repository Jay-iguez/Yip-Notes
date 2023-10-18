import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledNotesNavigation, StyledKennel, StyledNote } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import { YipNotesData } from "../../data/MockNoteData";
import { YipKennel } from "./YipKennel";

export default function YipKennelInfo() {
    const [kennelData, setKennelData] = useState(YipNotesData)

    return (
        <StyledNotesNavigation>
            {
                kennelData.map(kennel => {
                    return <YipKennel kennel={kennel} />
                })
            }
        </StyledNotesNavigation>
    )
}