import React, { useState, useEffect, useContext } from "react"
import KENNELS from '../components/home-user-interface/Kennels'
import EDIT_CONDITION from '../utils/Edit_Condition'
import KENNEL_VIEW from '../components/kennel-components/Kennel_View'
import condition_context from "../context/condition_context"

export default function Condition(props) { // kennelRoutes={kennels} setKennelRoutes={set_kennels} kennelData={app}
    
    const {dexie, menu} = props

    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    const [currentRender, setCurrentRender] = useState(stateRenderSwitcher)
    
    useEffect(() => {
        setCurrentRender(stateRenderSwitcher)
    }, [condition])

    function stateRenderSwitcher() {
        switch (condition) {
            case 'kennels-list':
                return <KENNELS dexie={dexie} />
            case 'create':
                return <EDIT_CONDITION dexie={dexie} menu={menu} set_condition={set_condition} />
            case 'drop-down':
                return <KENNEL_VIEW dexie={dexie} />
            default:
                return <KENNELS dexie={dexie} />
        }
    }

    return (
        <>
        <button className="button corner" onClick={() => {set_condition(condition === 'kennels-list' ? 'create' : 'kennels-list')}}>{condition === 'kennels-list' ? 'Manage Data' : 'Back'}</button>
        {
            currentRender
        }
        </>
    )
}