import { createContext } from "react";

const css_styling = {
    color_main: '#1D1F21',
    color_sub: '#373943',
    color_accent: '#2a2b34',
    color_font: '#FFFFFF'
}

const css_context = createContext(css_styling)

export default css_context