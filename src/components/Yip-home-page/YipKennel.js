import React from "react";
import { StyledKennel } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import { YipKennelNoteLink } from "./YipKennelNoteLink";

export const YipKennel = (props) => {

    const { kennel } = props

    return (
        <StyledKennel>
            <div className={`content-container`}>
                <div className={`child-content kennel-info`}>
                    <h3>{kennel.kennel}</h3>
                    <h3>{kennel.category}</h3>
                </div>
                {
                    kennel.yips.map(yip => {
                        return <YipKennelNoteLink name={yip.yip} />
                    })
                }
            </div>
        </StyledKennel>
    )
}