import React, { useState, useEffect } from "react";
import { YipKennel } from "../child-helpers/YipKennel";

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

export default function YipKennelsInfo(props) {
    const { state, setToRender } = props
    const { kennelRoutes, setKennelRoutes, kennelData } = state

    return (
        <>  <button className="button" onClick={() => setToRender('create')}>Create</button>
            {
                kennelData.map(kennel => {
                    return <YipKennel kennel={kennel} key={kennel.id} kennelRoutes={kennelRoutes} setKennelRoutes={setKennelRoutes} />
                })
            }
        </>

    )
}