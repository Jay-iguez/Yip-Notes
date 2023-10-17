import React from "react";
import { StyledCreateNote } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";

export default function YipCreate() {

    return (
        <StyledCreateNote>
            <div className={`content-container`}>
                <div className={`child-content`}>
                    <h3>Name:</h3>
                    <h3>Category:</h3>
                </div>
                <div className={`child-content`}>
                    <h3>Create:</h3>
                </div>
            </div>
        </StyledCreateNote>
    )
}