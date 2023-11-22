import React from "react"
import { StyledNoteLink, StyledYipKennel_KennelItemBox } from "../../styled-components/Yip-home-styled-components/YipHomeStyled"
import { Link } from "react-router-dom"

export const YipKennelNoteLink = (props) => {

    const { content, kennelName } = props

    return (
        <StyledYipKennel_KennelItemBox> 
           
                <Link to={`/home/${kennelName}/${content.id}`}>
                    <div className="kennel_yip" >
                        <h3>{content.name}</h3>
                        <p>{content.text}</p>
                    </div>
                </Link>
          
        </StyledYipKennel_KennelItemBox>
    )
}