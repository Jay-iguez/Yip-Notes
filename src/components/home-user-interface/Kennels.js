import React from "react";
import KENNEL from "../kennel-components/Kennel";

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

export default function Kennels(props) {
    const { condition, state } = props
    const { kennelRoutes, setKennelRoutes, kennelData } = state

    return (
        <>  <button className="button" onClick={() => condition.set_condition('create')}>Create</button>
            {
                kennelData.map(kennel => {
                    return <KENNEL kennel={kennel} key={kennel.id} kennelRoutes={kennelRoutes} setKennelRoutes={setKennelRoutes} />
                })
            }
        </>

    )
}