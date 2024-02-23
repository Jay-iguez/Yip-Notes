import { createContext } from "react";

// Our inital colors to start out with that is then used for app styles and indexeddb fallback.

const css_styling = {
    color_main: '#1D1F21',
    color_sub: '#373943',
    color_accent: '#2a2b34',
    color_font: '#FFFFFF'
}

const css_context = createContext(css_styling)

export default css_context