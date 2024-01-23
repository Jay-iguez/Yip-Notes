import React, { useState, useEffect } from "react";

export default function Create(props) {

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


    const updater = () => {
        if (screen === 'Kennels') {
            dexie.create_kennel(new_kennel)
        } else if (screen === 'Yips') {
            dexie.create_yip(new_yip)
        }
    }


    useEffect(() => {
        menu.set_menu(menu.menu)
    }, [])


    return (
        <>
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
                                    className="button"
                                />
                            </div>

                            <h3>Kennel Category: </h3>
                            <div style={{ display: 'flex' }}>
                                <h3>Select Existing Category: </h3>
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
                            <div style={{ display: 'flex' }}>
                                <h3>Or Create New Category: </h3>
                                <input
                                    onChange={(e) => {
                                        set_new_kennel({ ...new_kennel, kennel_category: e.target.value })
                                    }}
                                    className="button"
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
                                    className="button"
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
                <button className="button">Finalize Changes</button>
            </form>

        </>
    )
}