import React, { useState, useContext } from "react"
import menu_screen_context from "../../context/menu_screen_context"

export default function Edit(props) {
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



    const [screen, set_screen] = useState(menu_screen.edit)

    const [kennel_to_update, set_kennel_to_update] = useState('')
    const [kennel_update, set_kennel_update] = useState({ kennel_name: '', kennel_category: '' })

    const [yip_to_update, set_yip_to_update] = useState('')
    const [yip_update, set_yip_update] = useState({ yip_name: '', yips_id: '', yip_id: '' })

    const get_proper_kennel = (id) => {
        const kennel = dexie.dexie.filter(el => el.kennel_id === id)
        return kennel
    }

    const get_proper_yip = (id) => {
        const [kennel] = get_proper_kennel(yip_to_update)

        const [yip] = kennel.yips.filter(el => el.yip_id === id)

        return yip
    }

    const get_yips_id = (id) => {
        return [marry_kennels.filter(marry => marry.kennel_id === id)][0][0].yips_id
    }

    const updater = () => {
        if (screen === 'Kennels') {
            const [kennel] = get_proper_kennel(kennel_to_update)

            const modified_kennel = { kennel_name: kennel.kennel_name, kennel_category: kennel.kennel_category, kennel_date: kennel.kennel_date, kennel_id: kennel.kennel_id }

            const payload = { ...modified_kennel, kennel_name: kennel_update.kennel_name, kennel_category: kennel_update.kennel_category }

            dexie.updater({ action: 'update_kennel', payload: payload })

        } else if (screen === 'Yips') {
            const yip = get_proper_yip(yip_update.yip_id)

            const payload = { ...yip, yip_name: yip_update.yip_name === '' ? yip.yip_name : yip_update.yip_name, yips_id: !yip_update.yips_id ? yip.yips_id : yip_update.yips_id }

            dexie.updater({ action: 'update_yip', payload: payload })
        }
    }

    return (
        <>
            <br></br>
            <br></br>

            <div style={{ display: 'flex' }}>
                <h3>Edit: </h3>

                <select
                    defaultValue={screen}
                    className='option'
                    onChange={(e) => {
                        set_menu_screen({ ...menu_screen, edit: e.target.value })
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
                                    <select className="option" value={kennel_to_update} onChange={(e) => {
                                        set_kennel_to_update(parseInt(e.target.value))
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
                                    kennel_to_update === '' ?

                                        null

                                        :

                                        <>
                                            <div style={{ display: 'flex' }}>
                                                <h3>New Kennel Name: </h3>
                                                <input
                                                    onChange={(e) => {
                                                        set_kennel_update({ ...kennel_update, kennel_name: e.target.value })
                                                    }}
                                                    value={kennel_update.kennel_name}
                                                    className="option"
                                                />
                                            </div>

                                            <div style={{ display: 'flex' }}>
                                                <h3>New Kennel Category: </h3>
                                                <select className="option" value={kennel_update.kennel_category === false ? 'dog' : kennel_update.kennel_category} onChange={(e) => {
                                                    set_kennel_update({ ...kennel_update, kennel_category: e.target.value })
                                                }}>
                                                    <option value=''>-- select --</option>
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
                                        </>
                                }

                            </>

                            :

                            <>
                                <div style={{ display: 'flex' }}>
                                    <h3>Select Kennel: </h3>
                                    <select className="option" value={yip_to_update} onChange={(e) => {
                                        set_yip_to_update(parseInt(e.target.value))
                                    }}>
                                        <option value=''>-- select --</option>
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
                                {
                                    yip_to_update === '' ?

                                        null

                                        :

                                        <>
                                            <div style={{ display: 'flex' }}>
                                                <h3>Select Yip: </h3>
                                                <select className="option" value={yip_update.yip_id} onChange={(e) => {
                                                    const selected_option_content = e.target.options[e.target.selectedIndex].textContent
                                                    set_yip_update({ ...yip_update, yip_id: parseInt(e.target.value), yip_name: selected_option_content })
                                                }}>
                                                    <option value=''>-- select --</option>
                                                    {
                                                        [kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => yip).length !== 0 ?

                                                            [kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => <option value={yip.yip_id}>{yip.yip_name}</option>)

                                                            :

                                                            null
                                                    }
                                                </select>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <h3>New Yip Name: </h3>
                                                <input
                                                    onChange={(e) => {
                                                        set_yip_update({ ...yip_update, yip_name: e.target.value })
                                                    }}
                                                    className="option"
                                                    value={yip_update.yip_name}
                                                />
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <h3>New Kennel Source: </h3>
                                                <select className="option" value={yip_update.yips_id} onChange={(e) => {
                                                    set_yip_update({ ...yip_update, yips_id: parseInt(e.target.value) })
                                                }}>
                                                    <option value=''>-- select --</option>
                                                    {
                                                        kennel_names.length !== 0 ?

                                                            kennel_names.map(value => {
                                                                return <option value={get_yips_id(value.id)}>{value.name}</option>
                                                            })

                                                            :

                                                            null
                                                    }
                                                </select>
                                            </div>
                                        </>
                                }
                            </>

                }
                <button className="button">Submit Changes</button>
            </form>

        </>
    )
}