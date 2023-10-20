import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledNotesNavigation, StyledKennel, StyledNote } from "../../styled-components/Yip-home-styled-components/YipHomeStyled";
import { YipNotesData } from "../../data/MockNoteData";
import { YipKennel } from "./YipKennel";

/**
 * 
 * const [mem, setMem] = useState()

    useEffect(() => {
        const fetchMem = async () => {
            try {
                const quota = await navigator.storage.estimate()
                setMem(quota.quota)
            } catch (error) {
                console.error(error)
            }
        }

        fetchMem()

    }, [])

    logic to check amount of storage IndexedDB would allow on my devices. It's sufficient enough! 10 Gbs worth of stuff AT LEAST is plenty.
 */

export default function YipKennelInfo() {
    const [kennelData, setKennelData] = useState(YipNotesData)

    return (
        <>
            <StyledNotesNavigation>
                {
                    kennelData.map(kennel => {
                        return <YipKennel kennel={kennel} />
                    })
                }
            </StyledNotesNavigation>
        </>

    )
}