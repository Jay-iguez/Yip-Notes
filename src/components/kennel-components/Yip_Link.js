import React, { useContext } from "react"
import { StyledKennelContentBox } from "../../styled-components/Styled"
import { Link } from "react-router-dom"
import condition_context from "../../context/condition_context"
import view_context from "../../context/view_context"

export const YipLink = (props) => {

    const { content, kennel_name, yips_length } = props

    const view_state = useContext(view_context)
    const [view, set_view] = view_state

    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state


    const content_to_render = content.appearance === 'expand' ?
        <StyledKennelContentBox view={content.appearance} >
            <button
                className={`button kennel_yip drop-down expand`}
                onClick={() => {
                    set_condition('drop-down')
                    set_view(content.kennel)
                }}><div>
                    <h3>{content.name}</h3>
                    <p>Yips: {yips_length}</p>
                </div></button>
        </StyledKennelContentBox>
        :
        <StyledKennelContentBox view={content.appearance} >

            <Link to={`/${kennel_name}/${content.id}`}>
                <div className={`kennel_yip ${content.appearance}`} >
                    <h3>{content.name}</h3>
                    <p>{content.text.replace(/(<([^>]+)>)/gi, " ")}</p>
                </div>
            </Link>

        </StyledKennelContentBox>

    return (
        content_to_render
    )
}

export default YipLink