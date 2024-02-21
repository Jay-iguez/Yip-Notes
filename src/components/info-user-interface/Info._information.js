import React, { useState, useEffect } from "react";
import Dexie from "dexie";
import { StyledConditionWrapper, StyledConditionMessage } from "../../styled-components/Styled";

export default function InfoInformation() {



    const [overall_space, set_overall_space] = useState()
    const [actual_used_space, set_actual_used_space] = useState()



    useEffect(() => {
        const fetch_space_used = async () => {
            if (navigator.storage && navigator.storage.estimate) {
                const estimation = await navigator.storage.estimate()

                set_overall_space((estimation.quota / 1048576).toFixed(2))
                set_actual_used_space((estimation.usage / 1048576).toFixed(2))

            } else {
                console.error('storage nav not found')
            }
        }

        fetch_space_used()

    }, [])

    return (
        <>
            <StyledConditionWrapper>
                <StyledConditionMessage>
                    General Information
                </StyledConditionMessage>
                <div className="select_container">
                    <div className="value">
                        <p>Basic - </p>
                    </div>
                    <div className="value">
                        <p className="text">Yip Notes plays on endearing canine terms. A note/doc is referred to as a Yip and a group of Yips is referred to as a Kennel! </p>
                    </div>
                    <div className="value">
                        <p className="text">Each Kennel has a name and category property, so that you can create a unique name and sort several Kennels within categories</p>
                    </div>
                    <div className="value">
                        <p className="text">In order to create a Yip, you must first create a Kennel to house that Yip. Structure from the start is the goal!</p>
                    </div>
                    <div className="value">
                        <p className="text">Yip Notes uses IndexedDB as it's storage medium - meaning everthing you create stays local to your browser and your browser only. No data is sent anywhere nor is it retrieved</p>
                    </div>
                </div>
                <div className="select_container">
                    <div className="value">
                        <p>Organization - </p>
                    </div>
                    <div className="value">
                        <p className="text">You can manipulate a given Kennel or Yip's properties in the 'Manage Data' tab in 'Home'</p>
                    </div>
                    <div className="value">
                        <p className="text">There you can choose to rename certain items or even 'rehome' yips to live under different Kennels. And most importantly create new Kennels and Yips!</p>
                    </div>
                </div>
                <div className="select_container">
                    <div className="value">
                        <p>Criteria - </p>
                    </div>
                    <div className="value">
                        <p className="text">You must follow certain naming patterns/name lengths, they are as follows -</p>
                    </div>
                    <div className="value">
                        <p className="text">Kennel names must only contain either a-Z alphabet characters and spaces, no special characters. They must be at least 2 characters in length, and cannot exceed 25 characters in length. ---- Kennel categories can contain any character. They must have at least 2 characters, and not exceed 20 characters in length</p>
                    </div>
                    <div className="value">
                        <p className="text">Yip names can contain any character. They must have at least 2 characters in length and not exceed 20</p>
                    </div>
                    <div className="value">
                        <p className="text">UI colors must only be valid Hex colors - no other format is allowed</p>
                    </div>
                    <div className="value">
                        <p className="text">If a given criteria is not met, you won't be able to submit your changes</p>
                    </div>
                </div>
            </StyledConditionWrapper>
            <StyledConditionWrapper>
                <StyledConditionMessage>
                    Yip Notes Version
                </StyledConditionMessage>
                <div className="select_container">
                    <div className="value">
                        <p>1.0</p>
                    </div>
                </div>
            </StyledConditionWrapper>
            <StyledConditionWrapper>
                <StyledConditionMessage>
                    Allotted Storage
                </StyledConditionMessage>
                <div className="select_container">
                    <div className="value loading_bar">
                        <p className="fill" style={{ width: `${(actual_used_space / overall_space) * 100}%` }} />
                    </div>
                </div>
                <div className="select_container">
                    <div className="value">
                        <p>Available Space: {overall_space}Mbs</p>
                    </div>
                    <div className="value">
                        <p>Used Space: {actual_used_space}Mbs</p>
                    </div>
                </div>
            </StyledConditionWrapper>
        </>
    )
}