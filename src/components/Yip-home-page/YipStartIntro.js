import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import YipHomeScreen from "./YipHomeScreen";
import YipStartIntroMessage from "../../sub-components/YipStartIntroMessage";

export default function YipIntro() {

    return (
        <>
            <Routes>
                <Route path={`/`} element={<YipStartIntroMessage />} />
                <Route path={`home/*`} element={<YipHomeScreen />} />
            </Routes>
        </>
    )
}

