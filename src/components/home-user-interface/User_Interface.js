import React from 'react'
import { StyledContentContainer, StyledContentTopborder, StyledContentbody} from '../../styled-components/Styled'
import CONDITION from '../../utils/Condition';


export default function YipNoteHomeInfo() {
   
    return (
        <>
            <StyledContentContainer>
                <StyledContentTopborder />
                <StyledContentbody>
                    <CONDITION />
                </StyledContentbody>
            </StyledContentContainer>
        </>
    )
}
