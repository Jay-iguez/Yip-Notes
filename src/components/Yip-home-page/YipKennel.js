import React from "react";
import { StyledKennel, StyledKennelBox } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import { YipKennelNoteLink } from "./YipKennelNoteLink";

export const YipKennel = (props) => {

    let array = []

    const { kennel, kennelRoutes, setKennelRoutes } = props

    const splitKennelName = kennel.kennel.split(" ").join("-")

    return (
        <>
            <StyledKennel>
                <StyledKennelBox>
                    <h3 className="kennel-name">{kennel.kennel}</h3>
                    <h3 className="kennel-category">{kennel.category}</h3>
                </StyledKennelBox>
                {
                    kennel.yips.map(yip => {
                        const splitYipName = yip.yip.split(" ").join("-")
                        return <YipKennelNoteLink name={{ name: yip.yip, splitYipName: splitYipName }} kennelName={splitKennelName} key={yip.id + '-link'} />
                    })
                }
            </StyledKennel>
        </>
    )
}