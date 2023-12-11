import React, { useState } from 'react'
import { StyledContentContainer, StyledContentTopborder, StyledContentbody} from '../../styled-components/Styled'
import CONDITION from '../child-helpers/Condition';


export default function YipNoteHomeInfo(props) {
    const [currentMenuScreen, setCurrentMenuScreen] = useState('kennels-list')
    return (
        <>
            <StyledContentContainer>
                <StyledContentTopborder />
                <StyledContentbody>
                    <CONDITION toRender={currentMenuScreen} setToRender={setCurrentMenuScreen} state={props} />
                </StyledContentbody>
            </StyledContentContainer>
        </>
    )
}

//<YipCreate />
// <YipKennelsInfo kennelRoutes={props.kennelRoutes} setKennelRoutes={props.setKennelRoutes} kennelData={props.kennelData} />