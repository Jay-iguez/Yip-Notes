import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { StyledContentContainer, StyledContentTopborder, StyledContentbody } from "../../styled-components/Styled"

// Renders the splash screen with title of app 'Yip Notes' and displays a funny flavor text.

//      Houses the actual <Link> to the /-- home-user-interace --/ tree of components

const flavorMessages = [
    'best and brightest ideas.',
    'hard thought ventures.',
    'amazing mental prowess.',
    'important messages.',
    'weapons of the quill.'
]

const getFlavorMessage = () => {
    const randomIndex = Math.floor(flavorMessages.length * Math.random())
    return flavorMessages[randomIndex]
}

export default function YipIntroInfo() {

    const [flavorText] = useState(getFlavorMessage())

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#1D1F21'
    }, [])

    return (
        <StyledContentContainer>
            <StyledContentTopborder />
            <StyledContentbody>
                <h1>Welcome To Yip Notes!</h1>
                <Link to={`home/navigation-screen`}>
                    <div className="intro_message">
                        <h2>
                            Trot over to your {flavorText}
                        </h2>
                    </div>
                </Link>
            </StyledContentbody>
        </StyledContentContainer>
    )
}