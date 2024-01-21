import React, { useContext, useState } from "react";
import condition_context from "../../context/condition_context";

export default function YipCreate(props) {

    const { dexie } = props

    const [current_screen, set_current_screen] = useState('Kennels')
    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state


    return (
        <>
            <button className="button" onClick={() => set_condition('kennels-list')}>Back</button>
            <br></br>
            <br></br>

            <div style={{ display: 'flex' }}>
                <h3>Creating: </h3>
                
                <select className='button' onChange={(e) => {
                    set_current_screen(e.target.value)
                }}>
                    <option value='Kennels'>Kennels</option>
                    <option value='Yips'>Yips</option>
                </select>
            </div>

            {
                current_screen === 'Kennels' ?

                    <>
                        <h3>Kennel Name: </h3>
                        <input></input>
                        <h3>Kennel Category: </h3>
                        <select className="button" onChange={(e) => {
                            
                        }}>
                            <option value='Canines'>Canines</option>
                            <option value='Coding Stuff'>Coding Stuff</option>
                            <option value='Droowing'>Droowing</option>
                        </select>
                    </>

                    :

                    <>
                        <h3>Yip Name: </h3>
                        <input></input>
                        <h3>Select Kennel: </h3>
                        <select className="button" onChange={(e) => {
                            
                        }}>
                            <option value='THe kennels of fortune'>THe kennels of fortune</option>
                            <option value='Breeds of dogs I like'>Breeds of dogs I like</option>
                            <option value='Why Arch Linux is hard lol'>Why Arch Linux is hard lol</option>
                        </select>
                    </>
            
            }


        </>
    )
}