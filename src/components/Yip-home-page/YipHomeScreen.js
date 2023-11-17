import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { StyledYipHomeScreenNavBar } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import YipHomeScreenBodyGUI from "./YipHomeScreenBodyGUI";
import YipNote from "../Yip-notes/YipNote";
import { YipRoutesCreator } from "./YipRoutesCreator";
import { YipNotesData } from "../../data/MockNoteData";

const RouteReturn = () => {

    return (
        <Route path={'hey'} element={null} />
    )
}

export default function YipHomeInfo() {
    const [kennelData, setKennelData] = useState(YipNotesData)
    const [kennelRoutes, setKennelRoutes] = useState(null)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.backgroundColor = '#373943'
    }, [])

    useEffect(() => {

        const routesCreator = () => {
            const routes = kennelData.map(kennel => {

                const splitKennelName = kennel.kennel.split(" ").join("-")

                return kennel.yips.map(yip => {

                    const splitYipName = yip.yip.split(" ").join("-")
                    return <Route path={`${splitKennelName}/${splitYipName}`} element={<YipNote yip={yip} />} />
                })
            })

            const arrayOfRoutes = []

            routes.map(route => {

                for (let i = 0; i < route.length; i++) {
                    arrayOfRoutes.push(route[i])
                }

            })

            setKennelRoutes(arrayOfRoutes)

        }

        routesCreator()

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
                <Route path={`navigation-screen`} element={<YipHomeScreenBodyGUI kennelData={kennelData} kennelRoutes={kennelRoutes} setKennelRoutes={setKennelRoutes} />} />
                {
                    kennelRoutes && kennelRoutes
                }
            </Routes>
        </>
    )
}