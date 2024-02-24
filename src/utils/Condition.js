import React, { useState, useEffect, useContext } from "react"
import KENNELS from '../components/home-user-interface/Kennels'
import EDIT_CONDITION from '../utils/Edit_Condition'
import KENNEL_VIEW from '../components/kennel-components/Kennel_View'
import EASTEREGG from "../data/wireframes/Easter_Egg"
import funny_song from '../data/wireframes/funny_song.mp3'
import useSound from "use-sound";
import condition_context from "../context/condition_context"

export default function Condition(props) {

    // Special component to render different components conditionally - based on a value. Lets us change the view of our page without having to resort to creating new routes/links

    const { dexie, menu } = props

    const [play_funny, {stop}] = useSound(funny_song)

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
            case 'bleu':
                return <EASTEREGG song={{play: play_funny, stop: stop}} />
            default:
                return <KENNELS dexie={dexie} />
        }
    }

    return (
        <>
            <button className="button corner_left" onClick={() => {
                set_condition(condition === 'kennels-list' ? 'create' : 'kennels-list')
                stop()
            }}>{condition === 'kennels-list' ? 'Manage Data' : 'Back'}</button>
            {
                currentRender
            }
        </>
    )
}