import React, { useContext } from "react";
import KENNEL from "./Kennel";
import toggle_view from "../../context/view_context";

export default function KennelView(props) {
    const {condition, state} = props

    const view = useContext(toggle_view)

    return (
        <>
             <button className="button" onClick={() => condition.set_condition('kennels-list')}>Back</button>
        </>
    )
}