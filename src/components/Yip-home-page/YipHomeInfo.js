import React, { useState, useContext } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { TopNavigation } from "../../styled-components/App-styled/AppStyled";
import YipNote from "../../sub-components/YipNote";
import YipNoteHomeInfo from "../../sub-components/YipNoteHomeInfo";


export default function YipHomeInfo() {

    return (
        <>
            <TopNavigation>
                <Link to={`info`}>Home</Link>
                <Link to={`settings`}>Settings</Link>
                <Link to={`info`}>Information</Link>
            </TopNavigation>
                <Routes>
                    <Route path={`info`} element={<YipNoteHomeInfo />} />
                    <Route path={`note`} element={<YipNote />} />
                </Routes>
        </>
    )
}