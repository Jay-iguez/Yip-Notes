import React, { useContext, useState } from "react";
import { StyledConditionWrapper, StyledConditionMessage } from "../../styled-components/Styled";
import css_context from "../../context/css_context";

export default function ColorSetting(props) {


    // Our Color Setting component that lets us update our color values of indexeddb record 'color_schema'.

    const { css_state } = props


    const css_context_state = useContext(css_context)
    const [css, set_css] = css_context_state


    const [preview, set_preview] = useState('')
    const [is_disabled, set_is_disabled] = useState(true)
    const [on_change_css, set_on_change_css] = useState({
        to_change: ''
    })
    const [css_values, set_css_values] = useState({
        color_main: css.color_main,
        color_sub: css.color_sub,
        color_accent: css.color_accent,
        color_font: css.color_font
    })

    const is_hex_valid = (value) => {
        return /^#[0-9A-F]{3}$|^#[0-9A-F]{6}$|^#[0-9A-F]{8}$/i.test(value)
    }

    const update_css_on_change = (value) => {
        set_on_change_css(prevState => {
            const change_value = value
            const actual_value = css_values[change_value]

            if (change_value === '') {
                set_preview('')
                set_is_disabled(true)
                return { to_change: change_value }
            } else {
                if (is_hex_valid(actual_value)) {
                    set_is_disabled(false)
                } else {
                    set_is_disabled(true)
                }
                return { to_change: change_value, [change_value]: actual_value }
            }
        })

    }

    return (
        <>
            <StyledConditionWrapper>
                <StyledConditionMessage>
                    Change UI Colors
                </StyledConditionMessage>
                <div className="select_container">
                    <div className="value">
                        <p>Color Main: </p>
                        <div style={{ backgroundColor: css_values.color_main }} className="color_box" />
                    </div>
                </div>
                <div className="select_container">
                    <div className="value">
                        <p>Color Sub: </p>
                        <div style={{ backgroundColor: css_values.color_sub }} className="color_box" />
                    </div>
                </div>
                <div className="select_container">
                    <div className="value">
                        <p>Color Accent: </p>
                        <div style={{ backgroundColor: css_values.color_accent }} className="color_box" />
                    </div>
                </div>
                <div className="select_container">
                    <div className="value">
                        <p>Color Font: </p>
                        <div style={{ backgroundColor: css_values.color_font }} className="color_box" />
                    </div>
                </div>
            </StyledConditionWrapper>
            <form onSubmit={(e) => {
                e.preventDefault()
                css_state({ ...css_values, [on_change_css.to_change]: on_change_css[on_change_css.to_change] })
                set_on_change_css({ to_change: '' })
            }}>
                <StyledConditionWrapper>
                    <StyledConditionMessage>
                        UI Color To Change
                    </StyledConditionMessage>
                    <div className="select_container">
                        <select
                            className="button select_option"
                            value={on_change_css.to_change}
                            onChange={(e) => {
                                update_css_on_change(e.target.value)
                                set_preview(true)
                            }}
                        >
                            <option value='' >-- select --</option>
                            {
                                Object.keys(css_values).map(color => {
                                    return (
                                        <option key={color} value={color}>{color}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </StyledConditionWrapper>
                {
                    on_change_css.to_change === "" ? null :

                        <>
                            <StyledConditionWrapper>
                                <StyledConditionMessage>
                                    New Hex Color Value
                                </StyledConditionMessage>
                                <div className="select_container">
                                    <input
                                        className="button select_option input"
                                        value={on_change_css[on_change_css.to_change]}
                                        onChange={(e) => {
                                            if (is_hex_valid(e.target.value)) {
                                                set_is_disabled(false)
                                            } else {
                                                set_is_disabled(true)
                                            }
                                            set_on_change_css({ ...on_change_css, [on_change_css.to_change]: e.target.value })
                                        }}
                                    />
                                </div>
                                {
                                    preview === "" ? null :

                                        <div className="select_container">
                                            <div className="value">
                                                <p> Color Preview: </p>
                                                <div style={{ backgroundColor: `${on_change_css[on_change_css.to_change]}` }} className="color_box" />
                                            </div>
                                        </div>
                                }
                            </StyledConditionWrapper>
                        </>
                }
                <button
                    className={`button submit ${is_disabled ? 'disabled' : ''}`}
                    disabled={is_disabled}
                >
                    Submit
                </button>
            </form>
        </>
    )
}