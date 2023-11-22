import React, { useState, useEffect } from "react"
import YipKennelsScreen from '../YipHomeMenuScreens/YipKennelsScreen'
import YipCreate from '../YipHomeMenuScreens/YipCreate'

export default function Condition(props) {
    const { toRender, setToRender, state } = props
    
    const [currentRender, setCurrentRender] = useState(stateRenderSwitcher)
    
    useEffect(() => {
        setCurrentRender(stateRenderSwitcher)
    }, [toRender])

    function stateRenderSwitcher() {
        switch (toRender) {
            case 'kennels-list':
                return <YipKennelsScreen state={state} setToRender={setToRender} />
            case 'create':
                return <YipCreate state={state} setToRender={setToRender}/>
            default:
                return <YipKennelsScreen state={state} setToRender={setToRender}/>
        }
    }

    return currentRender
}