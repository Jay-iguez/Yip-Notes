import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import YipHomeInfo from "./YipHomeInfo";

export default function YipIntro() {

    return (
        <>
            <h1>Hello there welcome to my app!</h1>
            <Link to={`home/info`}>Go to the app!</Link>
            <Routes>
                <Route path={`home/*`} element={<YipHomeInfo />} />
            </Routes>
        </>
    )
}

