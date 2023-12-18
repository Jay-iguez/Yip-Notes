import React, {useContext} from "react"
import toggle_view from "../context/view_context"

export default function DummyTest(props) {
    const toggle_context = useContext(toggle_view)
    const [toggle, set_toggle] = toggle_context

    console.log(toggle)

    return (
        <h1>Hey brah</h1>
    )

}