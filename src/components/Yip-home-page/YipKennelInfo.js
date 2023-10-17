import React from "react";
import { Link } from "react-router-dom";
import { StyledNotesNavigation, StyledKennel, StyledNote } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";

export default function YipKennelInfo() {

    return (
        <StyledNotesNavigation>
            <StyledKennel>
                <div className={`content-container`}>
                    <div className={`child-content kennel-info`}>
                        <h3>Kennel Name</h3>
                        <h3>Kennel Category</h3>
                    </div>
                    <div className={`child-content notes`}>
                        <StyledNote><Link to={`/home/note`}>Test Note</Link></StyledNote>
                        <StyledNote><h4>Dogs</h4></StyledNote>
                        <StyledNote><h4>Dogs</h4></StyledNote>
                    </div>
                </div>
            </StyledKennel>
        </StyledNotesNavigation>
    )
}