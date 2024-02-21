import React from "react";
import INFOINFORMATION from "./Info._information";
import { StyledContentContainer, StyledContentTopborder, StyledContentbody, StyledManageScreen, StyledConditionWrapper, StyledConditionMessage } from "../../styled-components/Styled";

export default function Info () {

    return (
        <>
            <StyledContentContainer>
                <StyledContentTopborder />
                <StyledContentbody>
                    <StyledManageScreen>
                        <StyledConditionWrapper>
                            <StyledConditionMessage>
                                What would you like to know?
                            </StyledConditionMessage>
                            <INFOINFORMATION />
                        </StyledConditionWrapper>
                    </StyledManageScreen>
                </StyledContentbody>
            </StyledContentContainer>
        </>
    )
}