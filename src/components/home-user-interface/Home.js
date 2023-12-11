import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { StyledYipHomeScreenNavBar } from "../../styled-components/Styled";
import USER_INTERFACE from './User_Interface'
import YIP from '../yip-components/Yip'
import Data from "../../data/mock-data/Mock";
import * as Helper from '../../utils/helper_functions'


export default function YipHomeInfo() {
    const [kennelData, setKennelData] = useState(Data)
    const [kennelRoutes, setKennelRoutes] = useState(null)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#1D1F21'
    }, [])

    useEffect(() => {
        
        Helper.kennel_routes_creator(kennelData, setKennelRoutes, YIP)

    }, [kennelData])



    return (
        <>
            <StyledYipHomeScreenNavBar>
                <div className="nav-items">
                    <Link to={`navigation-screen`}>Home</Link>
                    <Link to={`settings`}>Settings</Link>
                    <Link to={`info`}>Information</Link>
                </div>
            </StyledYipHomeScreenNavBar>

            <Routes>
                <Route path={`navigation-screen`} element={<USER_INTERFACE kennelData={kennelData} kennelRoutes={kennelRoutes} setKennelRoutes={setKennelRoutes} />} />
                {
                    kennelRoutes && kennelRoutes
                }
            </Routes>
        </>
    )
}