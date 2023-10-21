import React from "react"
import { StyledNote } from "../../styled-components/Yip-home-styled-components/YipHomeStyled"
import { Link } from "react-router-dom"

export const YipKennelNoteLink = (props) => {
    
    const { name, kennelName } = props

    return (
        <StyledNote>
            <Link to={`/home/${kennelName}/${name.splitYipName}`}>{name.name}</Link>
        </StyledNote>
    )
}