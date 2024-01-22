import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { StyledYipHomeScreenNavBar } from "../../styled-components/Styled";
import USER_INTERFACE from './User_Interface'
import YIP from '../yip-components/Yip'
import * as Helper from '../../utils/helper_functions'
import condition_context from "../../context/condition_context";
import routes_context from "../../context/routes_context";
import app_data_context from "../../context/app_data_context";
import db from "../../data/mock-data/db";


export default function YipHomeInfo() {
    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    const kennels_state = useContext(routes_context)
    const [kennels, set_kennels] = kennels_state

    const app_state = useContext(app_data_context)
    const [app] = app_state

    const [dexie_kennels, set_dexie_kennels] = useState()

    const [data_change, set_data_change] = useState()
    const [current_menu, set_current_menu] = useState('Kennels')


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
        } catch(err) {
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
            const formatted_data = {...data, yip_content: ''}

            await db.yip.add(formatted_data)
            set_data_change(Math.random() * 1000)
            console.log('success!')
        } catch(err){
            console.error(err)
        }
    }






    const add_yip_content = async (key, changes) => {
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
        }
    }

    const change_state = (key, changes) => {
        add_yip_content(key, changes)
            .then(res => {
                console.log('success')
            })
            .catch(err => {
                console.error(err)
            })
    }


    const fetch_app = async () => {
        const data = await db.marry_kennels.toArray()
        return data
    }

    const fetch_data = async (data) => {
        try {
            const processed_data = await Promise.all(
                data.map(async (marry) => {
                    const kennels = await db.kennels.where('kennel_id').equals(marry.kennel_id).first()
                    const yip = await db.yip.where('yips_id').equals(marry.yips_id).toArray()

                    const formatted_kennels = { ...kennels, yips: yip }
                    return formatted_kennels
                })
            )
            set_dexie_kennels(processed_data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        set_dexie_kennels(undefined)
        fetch_app()
            .then(res => {
                fetch_data(res)
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
                        <Route path={`navigation-screen`} element={<USER_INTERFACE menu={{menu: current_menu, set_menu: set_current_menu}} dexie={{ dexie: dexie_kennels, set_dexie: set_dexie_kennels, change: change_state, update: create_kennel, update_yip: create_yip}} />} />
                        {
                            kennels && kennels
                        }
                    </Routes>
            }

        </>
    )
}