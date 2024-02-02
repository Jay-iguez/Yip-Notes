import React, { useContext } from "react";
import KENNEL from "./Kennel";
import view_context from "../../context/view_context";
import condition_context from "../../context/condition_context";

export default function KennelView() {

    const view_state = useContext(view_context)
    const [view, set_view] = view_state

    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    return (
        <>
             <KENNEL kennel={view} key={view.id} render_status={view ? 'complete' : ''} />
        </>
    )
}