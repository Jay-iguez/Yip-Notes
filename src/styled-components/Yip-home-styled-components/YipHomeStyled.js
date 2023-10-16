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
    margin: 1rem;
`

export const NotesNavigation = styled.div`
    background-color: bisque;
    margin: .5rem 1rem;
`

export const CreateNote = styled.div`
    .innerDiv {
        margin: .2rem .5rem;
    }

    width: 20rem;
`

export const Kennel = styled(CreateNote)`
`

export const Note = styled.div`

`

export const InfoBoard = styled.div`
    background-color: aliceblue;
    width: 60%;
`

