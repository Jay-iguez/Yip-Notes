import React from "react";
import YipNote from "./YipNote";
import { Route } from "react-router-dom";

export const YipRoutesCreator = (props) => {

    const { kennelData } = props

    /**
     * //debugger
                            if (index === kennel.yips.length - 1){
                                array.push(<Route path={`/home/${splitKennelName}/${splitYipName}`} element={<YipNote yip={yip} />} />)
                                //debugger
                                //setKennelRoutes(array)
                            } else {
                                array.push(<Route path={`/home/${splitKennelName}/${splitYipName}`} element={<YipNote yip={yip} />} />)
                            }

                            console.log("kennel:" + kennel.kennel + ", yip:" + yip.yip + ", index:" + index + "length of array - should be 5 at most: " + array.length)
                            //debugger
     */

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