import React, { useState } from "react"

export default function Edit(props) {
    const { dexie } = props

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




    const [screen, set_screen] = useState('Kennels')

    const [kennel_to_update, set_kennel_to_update] = useState(false)
    const [kennel_update, set_kennel_update] = useState({ kennel_name: '', kennel_category: kennel_categories[0]})

    const [yip_to_update, set_yip_to_update] = useState(false)
    const [yip_update, set_yip_update] = useState({ yip_name: '', yips_id: kennel_names[0].id, yip_id: 0, kennel_id: 0 })

    const get_proper_kennel = (id) => {
        const kennel = dexie.dexie.filter(el => el.kennel_id === id)
        return kennel
    }

    const get_proper_yip = (id) => {
        const [kennel] = get_proper_kennel(yip_to_update)

        const [yip] = kennel.yips.filter(el => el.yip_id === id)

        return yip
    }

    const updater = () => {
        if (screen === 'Kennels') {
            const [kennel] = get_proper_kennel(kennel_to_update)

            const modified_kennel = {kennel_name: kennel.kennel_name, kennel_category: kennel.kennel_category, kennel_date: kennel.kennel_date, kennel_id: kennel.kennel_id}
    
            const payload = {...modified_kennel, kennel_name: kennel_update.kennel_name, kennel_category: kennel_update.kennel_category}

           
            dexie.update_kennel(kennel_to_update, payload)
        } else if (screen === 'Yips') {
            const da_yip = get_proper_yip(yip_update.yip_id)

            console.log(da_yip)
            // dexie.update_yip(new_yip)
        }
    }

    //console.log([kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => <option value={yip.id}>{yip.name}</option>))

    return (
        <>
            <br></br>
            <br></br>

            <div style={{ display: 'flex' }}>
                <h3>Edit: </h3>

                <select

                    defaultValue={screen}
                    className='button'
                    onChange={(e) => {
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
                                <h3>Select Kennel: </h3>
                                <select className="button" onChange={(e) => {
                                    set_kennel_to_update(parseInt(e.target.value))
                                }}>
                                    {
                                        kennel_names.map(value => {
                                            return <option value={value.id}>{value.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            {
                                kennel_to_update === false ?

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
                                                className="button"
                                            />
                                        </div>

                                        <div style={{ display: 'flex' }}>
                                            <h3>New Kennel Category: </h3>
                                            <select className="button" onChange={(e) => {
                                                set_kennel_update({ ...kennel_update, kennel_category: e.target.value })
                                            }}>
                                                {
                                                    kennel_categories.map(value => {
                                                        return <option value={value}>{value}</option>
                                                    })
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
                                <select className="button" onChange={(e) => {
                                    set_yip_to_update(parseInt(e.target.value))
                                }}>
                                    {
                                        kennel_names.map(value => {
                                            return <option value={value.id}>{value.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            {
                                yip_to_update === false ?

                                    null

                                    :

                                    <>
                                        <div style={{ display: 'flex' }}>
                                            <h3>Select Yip: </h3>
                                            <select className="button" onChange={(e) => {
                                                set_yip_update({ ...yip_update, yip_id: parseInt(e.target.value) })
                                            }}>
                                                    <option value=''>-- select --</option>
                                                {
                                                    [kennel_yips.filter(value => value.kennel_id === yip_to_update)][0][0].yips.map(yip => <option value={yip.yip_id}>{yip.yip_name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <h3>New Yip Name: </h3>
                                            <input
                                                onChange={(e) => {
                                                    set_yip_update({ ...yip_update, yip_name: e.target.value })
                                                }}
                                                className="button"
                                            />
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <h3>New Kennel Source: </h3>
                                            <select className="button" onChange={(e) => {
                                                set_yip_update({ ...yip_update, kennel_id: parseInt(e.target.value) })
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
                        </>

                }
                <button className="button">Finalize Changes</button>
            </form>

        </>
    )
}