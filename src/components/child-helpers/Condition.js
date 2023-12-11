import React, { useState, useEffect } from "react"
import KENNELS from '../home-user-interface/Kennels'
import CREATE from '../home-user-interface/Create'

export default function Condition(props) {
    const { toRender, setToRender, state } = props
    
    const [currentRender, setCurrentRender] = useState(stateRenderSwitcher)
    
    useEffect(() => {
        setCurrentRender(stateRenderSwitcher)
    }, [toRender])

    function stateRenderSwitcher() {
        switch (toRender) {
            case 'kennels-list':
                return <KENNELS state={state} setToRender={setToRender} />
            case 'create':
                return <CREATE state={state} setToRender={setToRender}/>
            default:
                return <KENNELS state={state} setToRender={setToRender}/>
        }
    }

    return currentRender
}