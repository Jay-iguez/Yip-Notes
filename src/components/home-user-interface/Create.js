import React from "react";

export default function YipCreate(props) {
    const { condition } = props

    return (
        <>
            <button className="button" onClick={() => condition.set_condition('kennels-list')}>Back</button>
                        <h3>Name:</h3>
                        <h3>Category:</h3>
                        <h3>Create:</h3>
        </>
    )
}