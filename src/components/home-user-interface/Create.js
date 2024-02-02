import React, { useContext, useState, useEf, useEffect } from "react";
import condition_context from "../../context/condition_context";

export default function YipCreate(props) {

    const { dexie, menu } = props

    const single = (acc, current) => {
        let array = typeof acc !== 'object' ? [acc] : acc

        if (!(array.includes(current))) {
            array.push(current)
            return array
        } else {
            return acc
        }
    }

    const kennel_categories = dexie.dexie.map(value => {
        return value.kennel_category
    }).reduce(single)

    const kennel_names = dexie.dexie.map(value => {
        return { name: value.kennel_name, id: value.kennel_id }
    })


    const [screen, set_screen] = useState(menu.menu)
    const [new_kennel, set_new_kennel] = useState({ kennel_name: '', kennel_category: kennel_categories[0] })
    const [new_yip, set_new_yip] = useState({ yip_name: '', yips_id: kennel_names[0].id })
    
    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    const updater = () => {
        if (menu.menu === 'Kennels') {
            console.log('ken')
            dexie.update(new_kennel)
        } else if (menu.menu === 'Yips') {
            console.log('yip')
            dexie.update_yip(new_yip)
        }
    }


    useEffect(() => {
        menu.set_menu(menu.menu)
    }, [])


    return (
        <>
            <button className="button" onClick={() => set_condition('kennels-list')}>Back</button>
            <br></br>
            <br></br>

            <div style={{ display: 'flex' }}>
                <h3>Create: </h3>

                <select 
                
                defaultValue={screen}
                className='button' 
                onChange={(e) => {
                    menu.set_menu(e.target.value)
                    set_screen(e.target.value)
                }}
                >
                    <option value='Kennels'>Kennels</option>
                    <option value='Yips'>Yips</option>
                </select>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault()
                updater()
            }}>
                {
                    screen === 'Kennels' ?

                        <>
                            <div style={{ display: 'flex' }}>
                                <h3>Kennel Name: </h3>
                                <input
                                    onChange={(e) => {
                                        set_new_kennel({ ...new_kennel, kennel_name: e.target.value })
                                    }}
                                    value={new_kennel.kennel_name}
                                />
                            </div>

                            <div style={{ display: 'flex' }}>
                                <h3>Kennel Category: </h3>
                                <select className="button" onChange={(e) => {
                                    set_new_kennel({ ...new_kennel, kennel_category: e.target.value })
                                }}>
                                    {
                                        kennel_categories.map(value => {
                                            return <option value={value}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </>

                        :

                        <>
                            <div style={{ display: 'flex' }}>
                                <h3>Yip Name: </h3>
                                <input
                                    onChange={(e) => {
                                        set_new_yip({ ...new_yip, yip_name: e.target.value })
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>Select Kennel: </h3>
                                <select className="button" onChange={(e) => {
                                    set_new_yip({ ...new_yip, yips_id: parseInt(e.target.value) })
                                }}>
                                    {
                                        kennel_names.map(value => {
                                            return <option value={value.id}>{value.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </>

                }
                <button>Finalize Changes</button>
            </form>

        </>
    )
}