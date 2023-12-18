import React, { useEffect, useContext, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Routes, Route, Link } from 'react-router-dom';
import { StyledYipHomeScreenNavBar } from "../../styled-components/Styled";
import db from '../../data/mock-data/db'
import USER_INTERFACE from './User_Interface'
import YIP from '../yip-components/Yip'
import * as Helper from '../../utils/helper_functions'
import condition_view from "../../context/condition_context";
import routes from "../../context/routes_context";
import app_data from "../../context/data_context";


export default function YipHomeInfo() {
    const condition_context = useContext(condition_view)
    const [condition, set_condition] = condition_context

    const kennel_context = useContext(routes)
    const [kennels, set_kennels] = kennel_context

    const app_context = useContext(app_data)
    const [app, set_app] = app_context

    //const kennels = useLiveQuery(() => db.kennels.toArray())

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#1D1F21'
    }, [])

    useEffect(() => {
        
        Helper.kennel_routes_creator(app, set_kennels, YIP)

    }, [app])

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
                <Route path={`navigation-screen`} element={<USER_INTERFACE kennelRoutes={kennels} setKennelRoutes={set_kennels} kennelData={app} />} />
                {
                   kennels && kennels
                }
            </Routes>
        </>
    )
}