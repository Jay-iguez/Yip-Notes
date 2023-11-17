import React from "react"
import { StyledNoteLink } from "../../styled-components/Yip-home-styled-components/YipHomeStyled"
import { Link } from "react-router-dom"

export const YipKennelNoteLink = (props) => {
    
    const { name, kennelName } = props

    return (
        <StyledNoteLink>
            <Link to={`/home/${kennelName}/${name.splitYipName}`}>{name.name}</Link>
        </StyledNoteLink>
    )
}