import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import YipHomeScreen from "../Yip-home-page/YipHomeScreen";
import YipStartIntroMessage from "./YipStartIntroMessage";
import { YipNotesData } from "../../data/MockNoteData";

/**
 * 
 * console.log(YipNotesData)

const array = [1, 2, 3, 4]

const arrayString = JSON.stringify(YipNotesData)

console.log(arrayString)

const data = JSON.parse(arrayString)


console.log(`work?`, data)

 */

// So my options are to store either my notes data as JSON and parse it - or just store the data itself albeit in an unconvential manner I have yet to come across with of course IndexedDB. I'll just store them directly, i'll figure it out! Parsing will take too long as JSON, especially with how many notes people can create - trust me I would know ha-ha

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

