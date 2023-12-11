import React from "react";
import { Routes, Route } from "react-router-dom";
import HOME from "../home-user-interface/Home";
import INTRO_MESSAGE from "./Intro_Message";

// Parent container of whole app - creates two routes that entire application live in.

export default function YipIntro() {

    return (
        <>
            <Routes>
                <Route path={`/`} element={<INTRO_MESSAGE />} />
                <Route path={`home/*`} element={<HOME />} />
            </Routes>
        </>
    )
}

