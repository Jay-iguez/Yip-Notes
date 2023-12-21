import React, { useState, useContext } from "react";
import { YipCSSStyles } from "../styled-components/Styled";
import USECONTEXTCREATOR from '../context/use_Context_Creator'
import CSSContext from "../context/CSS-context";
import toggle_view from "../context/view_context";
import condition_view from "../context/condition_context";
import routes from "../context/routes_context";
import app_data from "../context/data_context";

export default function ContextStore({ children }) {
    const [styles_context_state] = USECONTEXTCREATOR(CSSContext)
    const [styles, set_styles] = styles_context_state
    console.log(styles)

    const [toggle_context_state] = USECONTEXTCREATOR(toggle_view)
    const [condition_context_state] = USECONTEXTCREATOR(condition_view)
    const [app_context_state] = USECONTEXTCREATOR(app_data)
    const [routes_context_state] = USECONTEXTCREATOR(routes)

    return (
        <CSSContext.Provider value={styles_context_state}>
            <condition_view.Provider value={condition_context_state}>
                <toggle_view.Provider value={toggle_context_state}>
                    <app_data.Provider value={app_context_state}>
                        <routes.Provider value={routes_context_state}>
                            <YipCSSStyles styles={styles}>
                                 {children}
                            </YipCSSStyles>
                        </routes.Provider>
                    </app_data.Provider>
                </toggle_view.Provider>
            </condition_view.Provider>
        </CSSContext.Provider>
    )
}