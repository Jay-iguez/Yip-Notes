import React, { useState, useEffect, useContext } from "react"
import { StyledConditionMessage, StyledConditionWrapper } from "../styled-components/Styled"
import menu_screen_context from "../context/menu_screen_context"
import CREATE from '../components/edit-user-interface/Create'
import DELETE from '../components/edit-user-interface/Delete'
import EDIT from '../components/edit-user-interface/Edit'


export default function EditCondition(props) {

    const { dexie, set_condition } = props

    const menu_screen_state = useContext(menu_screen_context)
    const [menu_screen, set_menu_screen] = menu_screen_state

    const [current_screen, set_current_screen] = useState(menu_screen.main)

    const [currentRender, setCurrentRender] = useState(stateRenderSwitcher)

    useEffect(() => {
        setCurrentRender(stateRenderSwitcher)
    }, [current_screen])

    function stateRenderSwitcher() {
        switch (current_screen) {
            case 'create':
                return <CREATE dexie={dexie} />
            case 'edit':
                return <EDIT dexie={dexie} />
            case 'delete':
                return <DELETE dexie={dexie} />
            default:
                return <button>This shouldn't be here ever, and you neither...</button>
        }
    }

    return (
        <>
            <StyledConditionWrapper>
                <StyledConditionMessage>
                    What would you like to manage?
                </StyledConditionMessage>
                <select className="option condition" defaultValue={current_screen} onChange={(e) => {
                    e.preventDefault()
                    set_menu_screen({ ...menu_screen, main: e.target.value })
                    set_current_screen(e.target.value)
                }}>
                    <option value='create'>Create</option>
                    {
                        dexie.no_kennels === true ? null :

                            <>
                                <option value='edit'>Edit</option>
                                <option value='delete'>Delete</option>
                            </>

                    }

                </select>
            </StyledConditionWrapper>
            <br></br>
            {
                currentRender
            }
        </>
    )
}