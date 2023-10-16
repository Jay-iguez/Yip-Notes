import styled from "styled-components";

export const YipHomeCSSContainer = styled.div`
    --font-size : ${props => props.styles.properties.fontSize};
   * {
    border: 1px solid black;
   }
`
export const MainBody = styled.div`
    background-color: blanchedalmond;
    margin: 0 2rem;
    margin-top: 3rem;
    font-size: var(--font-size);    
`
export const MainBodyBarrier = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 1rem;
`

export const NotesNavigation = styled.div`
    background-color: bisque;
    margin: .5rem 1rem;
    width: 50%;
`

export const CreateNote = styled.div`
    .content-container {
        margin: .2rem .5rem;
        display: flex;
        justify-content: space-between;
    }
    
    .child-content {
        padding: 1rem 2rem;
    }
`

export const Kennel = styled(CreateNote)`
    .content-container {
        flex-flow: column nowrap;
    }

    .child-content.notes {
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
    }
`

export const Note = styled.div`
    padding: 1rem;
    margin: 0 1.5rem;
`

export const InfoBoard = styled.div`
    background-color: aliceblue;
    width: 40%;
    margin: .5rem 1rem;
`

