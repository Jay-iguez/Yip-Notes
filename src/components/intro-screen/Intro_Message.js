import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { StyledContentContainer, StyledContentTopborder, StyledContentbody } from "../../styled-components/Styled"
import css_context from "../../context/css_context"

// Renders the splash screen with title of app 'Yip Notes' and displays a funny flavor text.

//      Houses the actual <Link> to the /-- home-user-interace --/ tree of components

const flavorMessages = [
    'best and brightest ideas.',
    'hard thought ventures.',
    'amazing mental prowess.',
    'important messages.',
    'weapons of the quill.',
    'works of literary art.',
    'dog themed notes.',
    'crevices of grey matter.'
]

const getFlavorMessage = () => {
    const randomIndex = Math.floor(flavorMessages.length * Math.random())
    return flavorMessages[randomIndex]
}

export default function IntroMessage() {

    const css_context_state = useContext(css_context)
    const [css, set_css] = css_context_state


    const [flavorText] = useState(getFlavorMessage())
    

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = css.color_main
    }, [])

    return (
        <StyledContentContainer>
            <StyledContentTopborder />
            <StyledContentbody>
                <div className="value">
                    <p>
                        Welcome to Yip Notes!
                    </p>
                </div>
                <Link to={`/navigation-screen`}>
                    <div className="value">
                        <p>
                            Click here to trot over to your {flavorText}
                        </p>
                    </div>
                </Link>
            </StyledContentbody>
        </StyledContentContainer>
    )
}