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
        fetch_app()
            .then(res => {
                fetch_data(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])


    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#1D1F21'
    }, [])

    useEffect(() => {

        if (dexie_kennels !== undefined) {
            Helper.kennel_routes_creator(dexie_kennels, set_kennels, YIP)
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

            <Routes>
                <Route path={`navigation-screen`} element={<USER_INTERFACE dexie={{dexie: dexie_kennels, set_dexie: set_dexie_kennels}} />} />
                {
                    kennels && kennels
                }
            </Routes>
        </>
    )
}