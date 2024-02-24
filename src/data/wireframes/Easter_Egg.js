import React, { useState, useEffect } from "react";
import { StyledContentContainer, StyledContentTopborder, StyledContentbody } from "../../styled-components/Styled";
import doggo_gif from './doggo_gif.gif'
import useSound from "use-sound";
import bark from './bark.mp3'

export default function EasterEgg(props) {

    // Something special for a special doggo

    const { song } = props

    const [show_funny, set_show_funny] = useState(false)
    const [woof] = useSound(bark)


    return (
        <>
            <StyledContentContainer>
                <StyledContentTopborder />
                <StyledContentbody>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {
                            !show_funny ?

                                <button className="button" onClick={() => {
                                    song.play()
                                    set_show_funny(true)

                                }}>Click here to see something goofy</button>

                                :
                                <>
                                    <img src={doggo_gif} onClick={woof} />
                                </>

                        }
                    </div>
                </StyledContentbody>
            </StyledContentContainer>
        </>
    )
}