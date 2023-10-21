import React from "react"
import { StyledNote } from "../../styled-components/Yip-home-styled-components/YipHomeStyled"

export default function YipNote({ yip = { yip : 'dogs!', id : '123', text : 'You kow, this is actually going together better than yesterdays lol and im less tired somehow ???'}}) {

    return (
        <StyledNote>
            <p>{yip.yip}</p>
            <p>{yip.id}</p>
            <p>{yip.text}</p>
            <p>hey</p>
        </StyledNote>
    )
}