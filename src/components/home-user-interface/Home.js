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


    const create_kennel_transaction = (data) => {
        const formatted_kennel_payload = { ...data, kennel_date: `${Date.now()}` }

        db.transaction('rw', db.yips, db.kennels, db.marry_kennels, function* () {
            const yips_id = yield db.yips.add({})
            const kennel_id = yield db.kennels.add(formatted_kennel_payload)
            yield db.marry_kennels.add({
                kennel_id: kennel_id,
                yips_id: yips_id
            })
        })
            .then(res => {
                console.log('success in creating new kennel!')
            })
            .catch(err => {
                console.error(err)
            })
    }

    const create_yip = async (data) => {
        try {
            const formatted_data = { ...data, yip_content: '' }
            await db.yip.add(formatted_data)
            console.log('success in creaating new yip')
        } catch (err) {
            console.error(err)
        }
    }

    const delete_yip = async (data) => {
        try {
            await db.yip.where('yip_id').equals(data).delete()
                .then(function (deleteCount) {
                    console.log(`Deleted ${deleteCount} ---`)
                })
        } catch (err) {
            console.error(err)
        }
    }

    const delete_kennel_transaction = (data) => {
        const { marry_id, yips_id, kennel_id } = data

        db.transaction('rw', db.marry_kennels, db.yip, db.yips, db.kennels, function* () {
            yield db.marry_kennels.where('marry_id').equals(marry_id).delete()
            yield db.yip.where('yips_id').equals(yips_id).delete()
            yield db.yips.where('yips_id').equals(yips_id).delete()
            yield db.kennels.where('kennel_id').equals(kennel_id).delete()
        })
            .then(res => {
                console.log('success in deleting kennel')
            })
            .catch(e => console.error(e))

    }

    const update_kennel = async (data) => {
        try {
            db.kennels.update(data.kennel_id, data).then(function (updated) {
                if (updated) {
                    console.log('kennel update success')
                } else {
                    console.log('kennel update error')
                }
            })
        } catch (err) {
            console.error(err)
        }
    }


    const update_yip = async (data) => {
        try {
            db.yip.update(data.yip_id, data).then(function (updated) {
                if (updated) {
                    console.log('success in yip udpate!')
                } else {
                    console.log('erro in updating yip')
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    const update_yip_content = async (data) => {
        set_is_yip_updated(true)
        try {
            db.yip.update(data.id, data.content).then(function (updated) {
                if (updated) {
                    console.log('success in updating content')
                } else {
                    console.log('error i guess')
                }
            })
        } catch (err) {
            console.error(err)
            set_is_yip_updated(false)
        }
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

    const updater = (action) => {
        switch (action.action) {
            case 'create_kennel':
                create_kennel_transaction(action.payload)
                break
            case 'create_yip':
                create_yip(action.payload)
                break
            case 'update_kennel':
                update_kennel(action.payload)
                break
            case 'update_yip_content':
                update_yip_content(action.payload)
                break
            case 'update_yip':
                update_yip(action.payload)
                break
            case 'delete_yip':
                delete_yip(action.payload)
                break
            case 'delete_kennel':
                delete_kennel_transaction(action.payload)
                break
            default:
                return 'Action Object Not Supplied!'
        }

        set_data_change(Math.random() * 1000)
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
        if (dexie_kennels !== undefined) {
            Helper.kennel_routes_creator(dexie_kennels, set_kennels, YIP, updater)
        }

    }, [dexie_kennels])

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#1D1F21'
    }, [])


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
                        <Route path={`navigation-screen`} element={
                            <USER_INTERFACE
                                dexie={{
                                    dexie: dexie_kennels,
                                    set_dexie: set_dexie_kennels,
                                    marry: marry_yips,
                                    set_marry: set_marry_yips,
                                    updater: updater
                                }}
                            />
                        } />
                        {
                            kennels && kennels
                        }
                    </Routes>
            }

        </>
    )
}