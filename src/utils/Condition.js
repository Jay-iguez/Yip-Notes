import React, { useState, useEffect, useContext } from "react"
import KENNELS from '../components/home-user-interface/Kennels'
import CREATE from '../components/home-user-interface/Create'
import KENNEL_VIEW from '../components/kennel-components/Kennel_View'
import condition_view from "../context/condition_context"

export default function Condition(props) {
    const { state } = props
    
    const condition = useContext(condition_view)

    const [currentRender, setCurrentRender] = useState(stateRenderSwitcher)
    
    useEffect(() => {
        setCurrentRender(stateRenderSwitcher)
    }, [condition.condition])

    function stateRenderSwitcher() {
        switch (condition.condition) {
            case 'kennels-list':
                return <KENNELS state={state} condition={condition} />
            case 'create':
                return <CREATE state={state} condition={condition}/>
            case 'drop-down':
                return <KENNEL_VIEW state={state} condition={condition} />
            default:
                return <KENNELS state={state} condition={condition}/>
        }
    }

    return currentRender
}