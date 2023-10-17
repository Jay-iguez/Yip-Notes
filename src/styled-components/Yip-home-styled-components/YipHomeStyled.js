import styled from "styled-components";

export const YipHomeCSSContainer = styled.div`
    --font-size : ${props => props.styles.properties.fontSize};
   * {
    border: 1px solid black;
   }
`
export const StyledMainBody = styled.div`
    background-color: blanchedalmond;
    margin: 0 2rem;
    margin-top: 3rem;
    font-size: var(--font-size);    
`
export const StyledMainBodyBarrier = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 1rem;
`

export const StyledNotesNavigation = styled.div`
    background-color: bisque;
    margin: .5rem 1rem;
    width: 50%;
`

export const StyledCreateNote = styled.div`
    width: 40rem;
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




