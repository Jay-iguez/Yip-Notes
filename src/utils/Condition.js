import React, { useState, useEffect, useContext } from "react"
import KENNELS from '../components/home-user-interface/Kennels'
import CREATE from '../components/home-user-interface/Create'
import KENNEL_VIEW from '../components/kennel-components/Kennel_View'
import condition_context from "../context/condition_context"

export default function Condition(props) { // kennelRoutes={kennels} setKennelRoutes={set_kennels} kennelData={app}
    
    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    const [currentRender, setCurrentRender] = useState(stateRenderSwitcher)
    
    useEffect(() => {
        setCurrentRender(stateRenderSwitcher)
    }, [condition])

    function stateRenderSwitcher() {
        switch (condition) {
            case 'kennels-list':
                return <KENNELS />
            case 'create':
                return <CREATE />
            case 'drop-down':
                return <KENNEL_VIEW />
            default:
                return <KENNELS />
        }
    }

    return currentRender
}