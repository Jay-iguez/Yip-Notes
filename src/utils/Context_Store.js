import React, { useState, useContext } from "react";
import { YipCSSStyles } from "../styled-components/Styled";
import USECONTEXTCREATOR from '../context/use_Context_Creator'
import css_context from "../context/css_context";
import toggle_view from "../context/view_context";
import condition_context from "../context/condition_context";
import routes_context from "../context/routes_context";
import app_data_context from "../context/app_data_context";

export default function ContextStore({ children }) {
    const [styles_context_state] = USECONTEXTCREATOR(css_context)
    const [styles] = styles_context_state

    const [toggle_context_state] = USECONTEXTCREATOR(toggle_view)
    const [condition_context_state] = USECONTEXTCREATOR(condition_context)
    const [app_context_state] = USECONTEXTCREATOR(app_data_context)
    const [routes_context_state] = USECONTEXTCREATOR(routes_context)

    return (
        <css_context.Provider value={styles_context_state}>
            <condition_context.Provider value={condition_context_state}>
                <toggle_view.Provider value={toggle_context_state}>
                    <app_data_context.Provider value={app_context_state}>
                        <routes_context.Provider value={routes_context_state}>
                            <YipCSSStyles styles={styles}>
                                 {children}
                            </YipCSSStyles>
                        </routes_context.Provider>
                    </app_data_context.Provider>
                </toggle_view.Provider>
            </condition_context.Provider>
        </css_context.Provider>
    )
}