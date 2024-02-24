import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HOME from "../home-user-interface/Home";
import INTRO_MESSAGE from "./Intro_Message";
import css_context from "../../context/css_context";
import db from "../../data/dexie-database/db";

// Parent container of whole app - creates two routes that entire application live in.
// It also sets the CSS of our css_context using our indexeddb record of 'color_schema'

export default function AppIntro() {

    const css_context_state = useContext(css_context)
    const [css, set_css] = css_context_state

    const [app_stable, set_app_stable] = useState(false)


    const update_css = (payload) => {
        set_indexeddb_css_values(payload)
            .then(res => {
                set_app_stable(false)
            })
            .catch(err => console.error(err))
    }

    const set_indexeddb_css_values = async (value) => {
        try {
            db.color_schema.update(1, value).then(function (updated) {
                if (updated) {
                    console.log('Color Schema update success')
                } else {
                    console.log('Color Schema update error')
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {

        const fetch_data = async () => {
            const css_data = await db.color_schema.toArray()
            let formatted_css_data

            if (!css_data[0]) {
                formatted_css_data = css
            } else {
                formatted_css_data = css_data[0]
            }


            const css_values = {
                color_main: formatted_css_data.color_main,
                color_sub: formatted_css_data.color_sub,
                color_accent: formatted_css_data.color_accent,
                color_font: formatted_css_data.color_font
            }

            set_css({ ...css_values })
            set_app_stable(true)
        }

        fetch_data()

    }, [app_stable])


    return (
        <>
            {
                !app_stable ?

                    <div>
                        <p style={{color: 'black'}}>App starting, please wait</p>
                    </div>

                    :

                    <Routes>
                        <Route path={`/`} element={<INTRO_MESSAGE />} />
                        <Route path={`/*`} element={<HOME css_state={update_css} />} />
                    </Routes>
            }
        </>
    )
}

