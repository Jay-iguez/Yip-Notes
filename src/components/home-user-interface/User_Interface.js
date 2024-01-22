import React from 'react'
import { StyledContentContainer, StyledContentTopborder, StyledContentbody} from '../../styled-components/Styled'
import CONDITION from '../../utils/Condition';


export default function UserInterface(props) {
   const { dexie, menu } = props
    return (
        <>
            <StyledContentContainer>
                <StyledContentTopborder />
                <StyledContentbody>
                    <CONDITION dexie={dexie} menu={menu} />
                </StyledContentbody>
            </StyledContentContainer>
        </>
    )
}
