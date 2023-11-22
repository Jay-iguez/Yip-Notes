import React from "react";
import { StyledYipKennel_KennelContainer, StyledYipKennel_KennelItemBox } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import { YipKennelNoteLink } from "./YipKennelNoteLink";

export const YipKennel = (props) => {

    const { kennel, kennelRoutes, setKennelRoutes } = props

    const splitKennelName = kennel.kennel.split(" ").join("-")

    return (
        <>
            <StyledYipKennel_KennelContainer>
                <StyledYipKennel_KennelItemBox>
                    <div className="kennel_information">
                        <div>
                            <h3>{kennel.kennel}</h3>
                            <h3>{kennel.category}</h3>
                        </div>
                        <button className="button edit_kennel">Edit Kennel</button>
                    </div>
                </StyledYipKennel_KennelItemBox>
                { kennel.yips.length < 5 ?
                    kennel.yips.map(yip => {
                        return <YipKennelNoteLink content={{ name: yip.yip, id: yip.id, text: yip.text}} kennelName={splitKennelName} key={yip.id + '-link'} />
                    })
                    :
                    <h3>This is gonna need a drop down!</h3>
                }
            </StyledYipKennel_KennelContainer>
        </>
    )
}

/**
 *  <StyledYipKennel_KennelItemBox>
                    <h3 className="kennel-name">{kennel.kennel}</h3>
                    <h3 className="kennel-category">{kennel.category}</h3>
                </StyledYipKennel_KennelItemBox>
                {
                    kennel.yips.map(yip => {
                        const splitYipName = yip.yip.split(" ").join("-")
                        return <YipKennelNoteLink name={{ name: yip.yip, splitYipName: splitYipName }} kennelName={splitKennelName} key={yip.id + '-link'} />
                    })
                }
 * 
 */