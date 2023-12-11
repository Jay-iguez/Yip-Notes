import React from "react"
import { StyledNoteLink, StyledYipKennel_KennelItemBox } from "../../styled-components/Styled"
import { Link } from "react-router-dom"

export const YipLink = (props) => {

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

export default YipLink