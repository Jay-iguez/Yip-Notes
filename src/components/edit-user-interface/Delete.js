import React, { useState, useContext } from "react"
import menu_screen_context from "../../context/menu_screen_context"

export default function Delete(props) {
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

    const kennel_yips = dexie.dexie.map(value => {
        return { kennel_id: value.kennel_id, yips: value.yips }
    })

    const marry_kennels = dexie.marry.map(value => {
        return value
    })



    const [screen, set_screen] = useState(menu_screen.delete)

    const [kennel_to_update, set_kennel_to_update] = useState(NaN)

    const [yip_to_update, set_yip_to_update] = useState(NaN)
    const [yip_update, set_yip_update] = useState({ yip_id: 0 })

    const get_proper_kennel = (id) => {
        const kennel = dexie.dexie.filter(el => el.kennel_id === id)
        return kennel
    }

    const get_proper_yip = (id) => {
        const [kennel] = get_proper_kennel(yip_to_update)

        const [yip] = kennel.yips.filter(el => el.yip_id === id)

        return yip
    }

    const get_marry_id = (id) => {
        return marry_kennels.filter(marry => marry.kennel_id === id)
    }

    const updater = () => {
        if (screen === 'Kennels') {
            const [marry] = get_marry_id(kennel_to_update)

            const payload = {yips_id: marry.yips_id, kennel_id: kennel_to_update, marry_id: marry.marry_id}

            dexie.delete_kennel(payload)

        } else if (screen === 'Yips') {
           
            dexie.delete_yip(yip_update.yip_id)
        }
    }

    //console.log([kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => <option value={yip.id}>{yip.name}</option>))
    //console.log([marry_kennels.filter(marry => marry.kennel_id === yip_to_update)][0][0].yips_id)

    return (
        <>
            <br></br>
            <br></br>

            <div style={{ display: 'flex' }}>
                <h3>Delete: </h3>

                <select
                    defaultValue={screen}
                    className='option'
                    onChange={(e) => {
                        set_menu_screen({ ...menu_screen, delete: e.target.value })
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

                        <p className="option">Select an option</p>

                        :

                        screen === 'Kennels' ?

                            <>
                                <div style={{ display: 'flex' }}>
                                    <h3>Select Kennel: </h3>
                                    <select className="option" onChange={(e) => {
                                        set_kennel_to_update(parseInt(e.target.value))
                                    }}>
                                        <option value={false}>-- select --</option>
                                        {
                                            kennel_names.map(value => {
                                                return <option value={value.id}>{value.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                {
                                     isNaN(kennel_to_update) ?

                                        null

                                        :

                                        <>
                                            <div>
                                                <h3>The Kennel: {get_proper_kennel(kennel_to_update)?.[0]?.kennel_name} - will be deleted.</h3>
                                                <h3 className="option">Warning: Understand all Yips of selected Kennel will also be deleted - modify the Kennel Source of any Yip you wish to save before deleting Kennel.</h3>
                                            </div>

                                        </>
                                }

                            </>

                            :

                            <>
                                <div style={{ display: 'flex' }}>
                                    <h3>Select Kennel: </h3>
                                    <select className="option" onChange={(e) => {
                                        set_yip_to_update(parseInt(e.target.value))
                                    }}>
                                        <option value=''>-- select --</option>
                                        {
                                            kennel_names.map(value => {
                                                return <option value={value.id}>{value.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                {
                                    isNaN(yip_to_update) ?

                                        null

                                        :

                                        <>
                                            <div style={{ display: 'flex' }}>
                                                <h3>Select Yip: </h3>
                                                <select className="option" onChange={(e) => {
                                                    set_yip_update({ ...yip_update, yip_id: parseInt(e.target.value) })
                                                }}>
                                                    <option value={false}>-- select --</option>
                                                    {
                                                        [kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => <option value={yip.yip_id}>{yip.yip_name}</option>)
                                                    }
                                                </select>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <h3>The Yip: {get_proper_yip(yip_update.yip_id)?.yip_name} - will be deleted. </h3>
                                            </div>
                                        </>
                                }
                            </>

                }
                <button className="button">Finalize Changes</button>
            </form>

        </>
    )
}