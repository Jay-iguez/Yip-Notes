import styled from "styled-components";

export const YipCSSStyles = styled.div`
    --font-size : ${props => props.styles.properties.fontSize};
    font-family: 'Sunflower', sans-serif;
   * {
    border: 1px solid black;
   }
   /** */
`
export const StyledMainBody = styled.div`
    //background-color: #a3bac4;
    margin: 0 2rem;
    margin-top: 3rem;
    font-size: var(--font-size);    
`
export const StyledMainBodyBarrier = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledNotesNavigation = styled.div`
    background-color: #cedbd7;
    width: 59%;
`

export const StyledCreateNote = styled.div`
    background-color: #cedbd7;
    width: 40%;
    height: 80vh;
`

export const StyledKennel = styled.div`
    .content-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
    }

    .child-content.kennel-info {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }

    .child-content.notes {
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
    }
`

export const StyledNote = styled.div`
    padding: 1rem;
    margin: 0 1.5rem;

    a {
        text-decoration: none;
    }
`






