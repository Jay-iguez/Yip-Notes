import React, { useContext, useState, useEffect } from "react";
import KENNEL from "../kennel-components/Kennel";
import condition_context from "../../context/condition_context";
import routes_context from "../../context/routes_context";


export default function Kennels(props) {

    // Creates views of Kennels based on data

    const { dexie } = props

    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    const routes_state = useContext(routes_context)
    const [routes, set_routes] = routes_state



    return (
        <> 
            {
                dexie.dexie.map(kennel => {
                    return <KENNEL kennel={kennel} key={kennel.kennel_id} kennel_routes={routes} set_kennel_routes={set_routes} set_condition={set_condition}/>
                })
            }
        </>

    )
}
