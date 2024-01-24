import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { StyledYipHomeScreenNavBar } from "../../styled-components/Styled";
import USER_INTERFACE from './User_Interface'
import YIP from '../yip-components/Yip'
import * as Helper from '../../utils/helper_functions'
import condition_context from "../../context/condition_context";
import routes_context from "../../context/routes_context";
import db from "../../data/mock-data/db";


export default function YipHomeInfo() {
    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    const kennels_state = useContext(routes_context)
    const [kennels, set_kennels] = kennels_state

    const [dexie_kennels, set_dexie_kennels] = useState()
    const [marry_yips, set_marry_yips] = useState()
    const [data_change, set_data_change] = useState()
    const [yip_is_updated, set_is_yip_updated] = useState(false)

    const add_yips = async () => {
        try {
            const id = await db.yips.add({})
            return id
        } catch (err) {
            console.error(err)
        }
    }

    const add_kennel = async (data) => {
        const formatted_data = { ...data, kennel_date: `${Date.now()}` }

        try {
            const id = await db.kennels.add(formatted_data)
            return id
        } catch (err) {
            console.error(err)
        }
    }

    const create_kennel = async (data) => {

        const yips_id = await add_yips()
        const kennel_id = await add_kennel(data)

        try {
            await db.marry_kennels.add({
                kennel_id: kennel_id,
                yips_id: yips_id
            })
            set_data_change(Math.random() * 1000)
            console.log('SUCCESS')
        } catch (err) {
            console.error(err)
        }
    }

    const create_yip = async (data) => {
        try {
            const formatted_data = { ...data, yip_content: '' }

            await db.yip.add(formatted_data)
            set_data_change(Math.random() * 1000)
            console.log('success!')
        } catch (err) {
            console.error(err)
        }
    }

    const delete_yip = async (data) => {
        try {
            await db.yip.where('yip_id').equals(data).delete()
                .then(function (deleteCount) {
                    console.log(`Deleted ${deleteCount} ---`)
                    set_data_change(Math.random() * 1000)
                })
        } catch(err) {
            console.error(err)
        }
    }




    const update_kennel = async (key, changes) => {
        try {
            db.kennels.update(key, changes).then(function (updated) {
                if (updated) {
                    console.log('kennel success')
                    set_data_change(Math.random() * 1000)
                } else {
                    console.log('kennel update error')
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    const delete_kennel = (data) => {
        const {marry_id, yips_id, kennel_id} = data

    
             db.transaction('rw', db.marry_kennels, db.yip, db.yips, db.kennels, function* () {
                yield db.marry_kennels.where('marry_id').equals(marry_id).delete()
                yield db.yip.where('yips_id').equals(yips_id).delete()
                yield db.yips.where('yips_id').equals(yips_id).delete()
                yield db.kennels.where('kennel_id').equals(kennel_id).delete()
            })
            .then(res => {
                console.log('success in deleting kennel')
                set_data_change(Math.random() * 1000)
            })
            .catch(e => console.error(e))

    }

    const update_yip = async (key, changes) => {
        try {
            db.yip.update(key, changes).then(function (updated) {
                if (updated) {
                    console.log('success in yip udpate!')
                    set_data_change(Math.random() * 1000)
                } else {
                    console.log('erro in updating yip')
                }
            })
        } catch(err) {
            console.error(err)
        }
    }

    const update_yip_content = async (key, changes) => {
        set_is_yip_updated(true)
        try {
            db.yip.update(key, changes).then(function (updated) {
                if (updated) {
                    console.log('success')
                    set_data_change(Math.random() * 1000)
                } else {
                    console.log('error i guess')
                }
            })
        } catch (err) {
            console.error(err)
            set_is_yip_updated(false)
        }
    }

    const change_state = (key, changes) => {
        update_yip_content(key, changes)
            .then(res => {
                console.log('success')
                set_data_change(Math.random() * 1000)
            })
            .catch(err => {
                console.error(err)
            })
    }


    const fetch_data = async () => {

        if (!yip_is_updated) {
            set_dexie_kennels(undefined) // Keeps the refresh from happening if the change is too the yip content
        }

        const data = await db.marry_kennels.toArray()
        set_marry_yips(data)

        try {
            const processed_data = await Promise.all(
                data.map(async (marry) => {
                    const kennels = await db.kennels.where('kennel_id').equals(marry.kennel_id).first()
                    const yip = await db.yip.where('yips_id').equals(marry.yips_id).toArray()

                    const formatted_kennels = { ...kennels, yips: yip }
                    return formatted_kennels
                })
            )

            return processed_data
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetch_data()
            .then(res => {
                set_dexie_kennels(res)
                set_is_yip_updated(false)
            })
            .catch(err => {
                console.error(err)
            })
    }, [data_change])


    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#1D1F21'
    }, [])

    useEffect(() => {

        if (dexie_kennels !== undefined) {
            console.log('should changes')
            Helper.kennel_routes_creator(dexie_kennels, set_kennels, YIP, change_state)
        }

    }, [dexie_kennels])


    return (
        <>
            <StyledYipHomeScreenNavBar>
                <div className="nav-items">
                    <Link to={`navigation-screen`} onClick={() => set_condition('kennels-list')}>Home</Link>
                    <Link to={`settings`}>Settings</Link>
                    <Link to={`info`}>Information</Link>
                </div>
            </StyledYipHomeScreenNavBar>
            {
                dexie_kennels === undefined ?

                    <h1> Loading... </h1>

                    :

                    <Routes>
                        <Route path={`navigation-screen`} element={<USER_INTERFACE

                            dexie={{
                                dexie: dexie_kennels,
                                set_dexie: set_dexie_kennels,
                                marry: marry_yips,
                                set_marry: set_marry_yips,
                                update_kennel: update_kennel,
                                update_yip: update_yip,
                                delete_yip: delete_yip,
                                delete_kennel: delete_kennel,
                                change: change_state,
                                create_kennel: create_kennel,
                                create_yip: create_yip
                            }} />} />
                        {
                            kennels && kennels
                        }
                    </Routes>
            }

        </>
    )
}