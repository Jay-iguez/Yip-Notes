import React from "react";
import { StyledContentContainer, StyledContentTopborder, StyledContentbody, StyledManageScreen, StyledConditionWrapper, StyledConditionMessage } from "../../styled-components/Styled";
import COLOR_SETTING from "./Color_Setting";

export default function Settings(props) {

    const { css_state } = props

    // Parent component to setting child components

    return (
        <>
            <StyledContentContainer>
                <StyledContentTopborder />
                <StyledContentbody>
                    <StyledManageScreen>
                        <StyledConditionWrapper>
                            <StyledConditionMessage>
                                What settings would you like to tinker with?
                            </StyledConditionMessage>
                            <COLOR_SETTING css_state={css_state} />
                        </StyledConditionWrapper>
                    </StyledManageScreen>
                </StyledContentbody>
            </StyledContentContainer>
        </>
    )
}
