import React from 'react'
import { StyledContentContainer, StyledContentTopborder, StyledContentbody} from '../../styled-components/Styled'
import CONDITION from '../../utils/Condition';


export default function UserInterface(props) {
   const { dexie, menu } = props

   // Parent component of main user interface to interact with kennels/yips and to manage their data.

    return (
        <>
            <StyledContentContainer>
                <StyledContentTopborder />
                <StyledContentbody >
                    <CONDITION dexie={dexie} menu={menu} />
                </StyledContentbody>
            </StyledContentContainer>
        </>
    )
}
