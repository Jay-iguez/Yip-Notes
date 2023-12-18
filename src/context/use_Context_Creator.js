import React, {useState, useContext} from "react";

export default function useContextCreator (context) {
    const given_context = useContext(context)
    const [current_context, set_current_context] = useState(given_context)

    return [current_context, set_current_context]
}