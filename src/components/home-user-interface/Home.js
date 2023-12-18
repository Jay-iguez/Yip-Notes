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
    const condition = useContext(condition_view)
    const kennel_routes = useContext(routes)
    const app = useContext(app_data)

    const kennels = useLiveQuery(() => db.kennels.toArray())

    console.log(kennels)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#1D1F21'
    }, [])

    useEffect(() => {
        
        Helper.kennel_routes_creator(app.app, kennel_routes.set_kennel_routes, YIP)

    }, [app.app])

    return (
        <>
            <StyledYipHomeScreenNavBar>
                <div className="nav-items">
                    <Link to={`navigation-screen`} onClick={() => condition.set_condition('kennels-list')}>Home</Link>
                    <Link to={`settings`}>Settings</Link>
                    <Link to={`info`}>Information</Link>
                </div>
            </StyledYipHomeScreenNavBar>

            <Routes>
                <Route path={`navigation-screen`} element={<USER_INTERFACE kennelRoutes={kennel_routes.kennel_routes} setKennelRoutes={kennel_routes.set_kennel_routes} kennelData={app.app} />} />
                {
                   kennel_routes.kennel_routes && kennel_routes.kennel_routes
                }
            </Routes>
        </>
    )
}