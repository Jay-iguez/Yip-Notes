import React from "react"
import { StyledNoteLink, StyledYipKennel_KennelItemBox } from "../../styled-components/Yip-home-styled-components/YipHomeStyled"
import { Link } from "react-router-dom"

export const YipKennelNoteLink = (props) => {

    const { name, kennelName } = props

    return (
        <StyledYipKennel_KennelItemBox>
            <div>
                <Link to={`/home/${kennelName}/${name.splitYipName}`}><div className="kennel_yip" >{kennelName}</div></Link>
            </div>
        </StyledYipKennel_KennelItemBox>
    )
}