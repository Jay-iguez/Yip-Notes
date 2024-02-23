import {useState, useContext } from "react";

// Custom hook to easily create context with necessary functions to affect_said context

export default function useContextCreator (context, state) {
    
    const given_context = useContext(context)
    const [current_context, set_current_context] = useState(given_context)
    const context_state = {current_context: current_context, set_current_context: set_current_context}

    const context_hook = [context_state.current_context, context_state.set_current_context]

    return [context_hook]
}