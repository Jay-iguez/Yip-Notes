import React, { useState, useContext } from "react";
import menu_screen_context from "../../context/menu_screen_context";

export default function Create(props) {

    const { dexie } = props

    const menu_screen_state = useContext(menu_screen_context)
    const [menu_screen, set_menu_screen] = menu_screen_state


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

   
    const [screen, set_screen] = useState(menu_screen.create)
    const [new_kennel, set_new_kennel] = useState({ kennel_name: '', kennel_category: kennel_categories[0] })
    const [new_yip, set_new_yip] = useState({ yip_name: '', yips_id: kennel_names[0].id })


    const updater = () => {
        if (screen === 'Kennels') {
            dexie.create_kennel(new_kennel)
        } else if (screen === 'Yips') {
            dexie.create_yip(new_yip)
        }
    }

/**
 * May not be needed but keeping just in case
 * 
    useEffect(() => {
        menu.set_menu(menu.menu)
    }, [])
 */

    console.log(kennel_names)

    return (
        <>
            <br></br>
            <br></br>

            <div style={{ display: 'flex' }}>
                <h3>Create: </h3>

                <select
                    defaultValue={screen}
                    className='option'
                    onChange={(e) => {
                        set_menu_screen({...menu_screen, create: e.target.value})
                        set_screen(e.target.value)
                    }}
                >   
                    <option value=''>-- select --</option>
                    <option value='Kennels'>Kennels</option>
                    <option value='Yips'>Yips</option>
                </select>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault()
                updater()
            }}>
                {

                    screen === '' ? 

                    <p className="button">Select an option.</p>

                    :


                    screen === 'Kennels' ?

                        <>
                            <div style={{ display: 'flex' }}>
                                <h3>Kennel Name: </h3>
                                <input
                                    onChange={(e) => {
                                        set_new_kennel({ ...new_kennel, kennel_name: e.target.value })
                                    }}
                                    value={new_kennel.kennel_name}
                                    className="option"
                                />
                            </div>

                            <h3>Kennel Category: </h3>
                            <div style={{ display: 'flex' }}>
                                <h3>Select Existing Category: </h3>
                                <select className="option" onChange={(e) => {
                                    set_new_kennel({ ...new_kennel, kennel_category: e.target.value })
                                }}>
                                    <option value={false}>-- select --</option>
                                    {
                                        typeof kennel_categories === 'object' ? 
                                        
                                        kennel_categories.map(value => {
                                            return <option value={value}>{value}</option>
                                        })

                                        :

                                        <option value={kennel_categories}>{kennel_categories}</option>
                                    }
                                </select>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>Or Create New Category: </h3>
                                <input
                                    onChange={(e) => {
                                        set_new_kennel({ ...new_kennel, kennel_category: e.target.value })
                                    }}
                                    className="option"
                                />
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
                                    className="option"
                                />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <h3>Select Kennel: </h3>
                                <select className="option" onChange={(e) => {
                                    set_new_yip({ ...new_yip, yips_id: parseInt(e.target.value) })
                                }}>
                                    <option value={false}>-- select --</option>
                                    {
                                        kennel_names.length !== 0 ? 
                                        
                                        kennel_names.map(value => {
                                            return <option value={value.id}>{value.name}</option>
                                        })

                                        :

                                        null
                                    }
                                </select>
                            </div>
                        </>

                }
                <button className="button">Finalize Changes</button>
            </form>

        </>
    )
}