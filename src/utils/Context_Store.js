import React, { useEffect, useState } from "react";
import { YipCSSStyles } from "../styled-components/Styled";
import USECONTEXTCREATOR from '../context/use_Context_Creator'
import css_context from "../context/css_context";
import toggle_view from "../context/view_context";
import condition_context from "../context/condition_context";
import routes_context from "../context/routes_context";
import app_data_context from "../context/app_data_context";
import menu_screen_context from '../context/menu_screen_context'

export default function ContextStore({ children }) {

    const [styles_context_state] = USECONTEXTCREATOR(css_context)
    const [styles] = styles_context_state
    const [toggle_context_state] = USECONTEXTCREATOR(toggle_view)
    const [condition_context_state] = USECONTEXTCREATOR(condition_context)
    const [app_context_state] = USECONTEXTCREATOR(app_data_context)
    const [routes_context_state] = USECONTEXTCREATOR(routes_context)
    const [menu_screen_context_state] = USECONTEXTCREATOR(menu_screen_context)


    return (
        <css_context.Provider value={styles_context_state}>
            <condition_context.Provider value={condition_context_state}>
                <toggle_view.Provider value={toggle_context_state}>
                    <app_data_context.Provider value={app_context_state}>
                        <routes_context.Provider value={routes_context_state}>
                            <menu_screen_context.Provider value={menu_screen_context_state}>
                                <YipCSSStyles styles={styles}>
                                    {children}
                                </YipCSSStyles>
                            </menu_screen_context.Provider>
                        </routes_context.Provider>
                    </app_data_context.Provider>
                </toggle_view.Provider>
            </condition_context.Provider>
        </css_context.Provider>
    )
}



/**
 * 
 * @returns 
 * 
 *  const fetchDataFromDexie = async () => {
    try {
      // Use toArray to fetch all records from marry_kennels
      const marryKennelsData = await db.marry_kennels.toArray();
 
      // Process each record and fetch related data
      const processedData = await Promise.all(
        marryKennelsData.map(async (marry) => {
          const kennelData = await db.kennels.where('kennel_id').equals(marry.kennel_id).first();
          const yipData = await db.yip.where('yips_id').equals(marry.yips_id).first();
 
          // Combine marry_kennels, kennels, and yip data as needed
          return {
            marry,
            kennel: kennelData,
            yip: yipData,
          };
        })
      );
 
      setMarryData(processedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
 */


/**
 * 
 * import uniqid from 'uniqid'

export const Data = [
    {
        kennel: 'JavaScript stuff I want to study',
        category: 'coding stuff',
        date: Date.now(),
        id: uniqid(),
        yips: [
            {
                yip: 'JavaScript call stack',
                id: 'dog',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'Methods on methods?',
                id: uniqid(),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        kennel: 'Dog stuff ha ha',
        category: 'canines and such ha-ha',
        date: Date.now(),
        id: uniqid(),
        yips: [
            {
                yip: 'What if dogs could talk?',
                id: uniqid(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'They are pretty cute',
                id: uniqid(),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                yip: 'THey eat a ton i dont know why',
                id: uniqid(),
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                yip: 'What if dogs could talk?',
                id: uniqid(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'They are pretty cute',
                id: uniqid(),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                yip: 'THey eat a ton i dont know why',
                id: uniqid(),
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                yip: 'What if dogs could talk?',
                id: uniqid(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'They are pretty cute',
                id: uniqid(),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                yip: 'THey eat a ton i dont know why',
                id: uniqid(),
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                yip: 'What if dogs could talk?',
                id: uniqid(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'They are pretty cute',
                id: uniqid(),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                yip: 'THey eat a ton i dont know why',
                id: uniqid(),
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                yip: 'What if dogs could talk?',
                id: uniqid(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'They are pretty cute',
                id: uniqid(),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                yip: 'THey eat a ton i dont know why',
                id: uniqid(),
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                yip: 'What if dogs could talk?',
                id: uniqid(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                yip: 'They are pretty cute',
                id: uniqid(),
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                yip: 'THey eat a ton i dont know why',
                id: uniqid(),
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
        ]
    },
    {
        kennel: 'Stuff I finally made work',
        category: 'acomplishments',
        date: Date.now(),
        id: uniqid(),
        yips: [
            {
                yip: 'What in tarnation this worked?',
                id: uniqid(),
                text: 'Just some random text and not lorum ipsum cause I was too lazy to copy and paste some lol'
            }
        ]
    }
]

export default Data
 * 
 */