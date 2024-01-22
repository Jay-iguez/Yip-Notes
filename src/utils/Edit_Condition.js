import React, { useState, useEffect} from "react"
import CREATE from '../components/edit-user-interface/Create'
import DELETE from '../components/edit-user-interface/Delete'
import EDIT from '../components/edit-user-interface/Edit'


export default function EditCondition(props) { // kennelRoutes={kennels} setKennelRoutes={set_kennels} kennelData={app}
    
    const {dexie, menu, set_condition} = props

    const [current_screen, set_current_screen] = useState('create')

    const [currentRender, setCurrentRender] = useState(stateRenderSwitcher)
    
    useEffect(() => {
        setCurrentRender(stateRenderSwitcher)
    }, [current_screen])

    function stateRenderSwitcher() {
        switch (current_screen) {
            case 'create':
                return <CREATE dexie={dexie} menu={menu}/>
            case 'edit':
                return <EDIT dexie={dexie} />
            case 'delete':
                return <DELETE dexie={dexie} />
            default:
                return <button>THis shouldn't be here ever</button>
        }
    }

    return (
        <>
        <h3 className="button">What would you like to do? </h3>
        <select className="button" onChange={(e) => {
            e.preventDefault()
            set_current_screen(e.target.value)
        }}>
            <option value='create'>Create</option>
            <option value='edit'>Edit</option>
            <option value='delete'>Delete</option>
        </select>
        <br></br>
        <br></br>
        
        <button className="button" onClick={() => set_condition('kennels-list')}>Back</button>
        {
            currentRender
        }
        </>
    )
}