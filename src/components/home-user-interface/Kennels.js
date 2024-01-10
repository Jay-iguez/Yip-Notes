import React, { useContext, useState, useEffect } from "react";
import KENNEL from "../kennel-components/Kennel";
import condition_context from "../../context/condition_context";
import routes_context from "../../context/routes_context";
import app_data_context from "../../context/app_data_context";

export default function Kennels(props) {

    const { dexie } = props

    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    const routes_state = useContext(routes_context)
    const [routes, set_routes] = routes_state

    const app_state = useContext(app_data_context)
    const [app, set_app] = app_state


    return (
        <>  <button className="button" onClick={() => set_condition('create')}>Create</button>
            {
                dexie.dexie.map(kennel => {
                    return <KENNEL kennel={kennel} key={kennel.kennel_id} kennel_routes={routes} set_kennel_routes={set_routes} />
                })
            }
        </>

    )
}

/**
 * 
 * const [mem, setMem] = useState()

    useEffect(() => {
        const fetchMem = async () => {
            try {
                const quota = await navigator.storage.estimate()
                setMem(quota.quota)
            } catch (error) {
                console.error(error)
            }
        }

        fetchMem()

    }, [])

    logic to check amount of storage IndexedDB would allow on my devices. It's sufficient enough! 10 Gbs worth of stuff AT LEAST is plenty.
 */