import React from "react"
import { StyledKennelContentBox } from "../../styled-components/Styled"
import { Link } from "react-router-dom"

export const YipLink = (props) => {

    const { content, kennelName } = props

    const content_to_render = content.appearance === 'expand' ?
        <StyledKennelContentBox view={content.appearance} >
            <div className={`kennel_yip ${content.appearance}`} >
                <h3>{content.name}</h3>
                <div className="kennel_expand">
                    <p>Yips: {22}</p>
                    <button onClick={() => console.log('dog')}><div className="caret"></div></button>
                </div>
            </div>
        </StyledKennelContentBox>
        :
        <StyledKennelContentBox view={content.appearance} >

            <Link to={`/home/${kennelName}/${content.id}`}>
                <div className={`kennel_yip ${content.appearance}`} >
                    <h3>{content.name}</h3>
                    <p>{content.text}</p>
                </div>
            </Link>

        </StyledKennelContentBox>

    return (
        content_to_render
    )
}

export default YipLink