import React from 'react'
import { StyledContentContainer, StyledContentTopborder, StyledContentbody} from '../../styled-components/Styled'
import CONDITION from '../../utils/Condition';


export default function YipNoteHomeInfo(props) {
   
    return (
        <>
            <StyledContentContainer>
                <StyledContentTopborder />
                <StyledContentbody>
                    <CONDITION state={props} />
                </StyledContentbody>
            </StyledContentContainer>
        </>
    )
}

//<YipCreate />
// <YipKennelsInfo kennelRoutes={props.kennelRoutes} setKennelRoutes={props.setKennelRoutes} kennelData={props.kennelData} />