import React, {useContext} from "react";
import condition_context from "../../context/condition_context";

export default function YipCreate(props) {

    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state


    return (
        <>
            <button className="button" onClick={() => set_condition('kennels-list')}>Back</button>
                        <h3>Name:</h3>
                        <h3>Category:</h3>
                        <h3>Create:</h3>
        </>
    )
}