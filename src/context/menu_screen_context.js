import { createContext } from "react";

// Our values for our menu_screen values under Edit_Condition and the folder of components edit-user-interface.

const menu_screen_context = createContext({main: 'create', create: '', edit: '', delete: ''})

export default menu_screen_context