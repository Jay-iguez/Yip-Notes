import React, { useState, useContext } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { TopNavigation } from "../../styled-components/App-styled/AppStyled";
import YipNote from "./YipNote";
import YipHomeScreenBodyGUI from "./YipHomeScreenBodyGUI";


export default function YipHomeInfo() {

    return (
        <>
            <TopNavigation>
                <Link to={`navigation-screen`}>Home</Link>
                <Link to={`settings`}>Settings</Link>
                <Link to={`info`}>Information</Link>
            </TopNavigation>
                <Routes>
                    <Route path={`navigation-screen`} element={<YipHomeScreenBodyGUI />} />
                    <Route path={`note`} element={<YipNote />} />
                </Routes>
        </>
    )
}