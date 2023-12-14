import React, { useContext } from "react"
import { StyledKennelContentBox } from "../../styled-components/Styled"
import { Link } from "react-router-dom"
import condition_view from "../../context/condition_context"
import toggle_view from "../../context/view_context"

export const YipLink = (props) => {

    const { content, kennelName } = props

    const view = useContext(toggle_view)
    const condition = useContext(condition_view)


    const content_to_render = content.appearance === 'expand' ?
        <StyledKennelContentBox view={content.appearance} >
            <div className={`kennel_yip ${content.appearance}`} >
                <h3>{content.name}</h3>
                <div className="kennel_expand">
                    <p>Yips: {22}</p>
                    <button onClick={() => {
                        condition.set_condition('drop-down')
                        view.set_view(content.kennel)
                    }}><div className="caret"></div></button>
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