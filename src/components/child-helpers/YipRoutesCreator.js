import React from "react";
import YipNote from "../Yip-notes/YipNote";
import { Route } from "react-router-dom";

export const YipRoutesCreator = (props) => {

    const { kennelData } = props

    return (
            kennelData.map(kennel => {

                const splitKennelName = kennel.kennel.split(" ").join("-")
                
                return kennel.yips.map(yip => {

                    const splitYipName = yip.yip.split(" ").join("-")
                    return <Route path={`/home/${splitKennelName}/${splitYipName}`} element={<YipNote yip={yip} />} />
                })
            })
    )
}