import React from "react";
import { Routes, Route } from "react-router-dom";
import { StyledKennel } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import { YipKennelNoteLink } from "./YipKennelNoteLink";
import YipNote from "./YipNote";

export const YipKennel = (props) => {

    let array = []

    const { kennel, kennelRoutes, setKennelRoutes } = props

    const splitKennelName = kennel.kennel.split(" ").join("-")

    return (
        <>
            <StyledKennel>
                <div className={`content-container`}>
                    <div className={`child-content kennel-info`}>
                        <h3>{kennel.kennel}</h3>
                        <h3>{kennel.category}</h3>
                    </div>
                    {

                        kennel.yips.map(yip => {
                            const splitYipName = yip.yip.split(" ").join("-")
                            return <YipKennelNoteLink name={{name: yip.yip, splitYipName: splitYipName}} kennelName={splitKennelName} key={yip.id + '-link'} />
                        })
                    }
                </div>
            </StyledKennel>
        </>
    )
}