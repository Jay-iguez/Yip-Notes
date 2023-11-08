import React, { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { StyledNote } from "../../styled-components/Yip-home-styled-components/YipHomeStyled"

export default function YipNote({ yip = { yip : 'dogs!', id : '123', text : 'You kow, this is actually going together better than yesterdays lol and im less tired somehow ???'}}) {

    const [value, setValue] = useState(yip.text)

    return (
        <StyledNote>
            <p>{yip.yip}</p>
            <p>{yip.id}</p>
                <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </StyledNote>
    )
}