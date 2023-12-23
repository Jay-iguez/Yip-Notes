import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { StyledYipHomeScreenNavBar } from "../../styled-components/Styled";
import USER_INTERFACE from './User_Interface'
import YIP from '../yip-components/Yip'
import * as Helper from '../../utils/helper_functions'
import condition_context from "../../context/condition_context";
import routes_context from "../../context/routes_context";
import app_data_context from "../../context/app_data_context";


export default function YipHomeInfo() {
    const condition_state = useContext(condition_context)
    const [condition, set_condition] = condition_state

    const kennels_state = useContext(routes_context)
    const [kennels, set_kennels] = kennels_state

    const app_state = useContext(app_data_context)
    const [app] = app_state

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
                <Route path={`navigation-screen`} element={<USER_INTERFACE />} />
                {
                   kennels && kennels
                }
            </Routes>
        </>
    )
}