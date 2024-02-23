import React from "react";
import { YipCSSStyles } from "../styled-components/Styled";
import USECONTEXTCREATOR from '../context/use_Context_Creator'
import css_context from "../context/css_context";
import toggle_view from "../context/view_context";
import condition_context from "../context/condition_context";
import routes_context from "../context/routes_context";
import menu_screen_context from '../context/menu_screen_context'

export default function ContextStore({ children }) {

    // Our context store component - it houses all our context to allow any children to obtain access to said context.

    const [styles_context_state] = USECONTEXTCREATOR(css_context)
    const [styles] = styles_context_state
    const [toggle_context_state] = USECONTEXTCREATOR(toggle_view)
    const [condition_context_state] = USECONTEXTCREATOR(condition_context)
    const [routes_context_state] = USECONTEXTCREATOR(routes_context)
    const [menu_screen_context_state] = USECONTEXTCREATOR(menu_screen_context)


    return (
        <css_context.Provider value={styles_context_state}>
            <condition_context.Provider value={condition_context_state}>
                <toggle_view.Provider value={toggle_context_state}>
                        <routes_context.Provider value={routes_context_state}>
                            <menu_screen_context.Provider value={menu_screen_context_state}>
                                <YipCSSStyles styles={styles}>
                                    {children}
                                </YipCSSStyles>
                            </menu_screen_context.Provider>
                        </routes_context.Provider>
                </toggle_view.Provider>
            </condition_context.Provider>
        </css_context.Provider>
    )
}

