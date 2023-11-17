import styled from "styled-components";

export const YipCSSStyles = styled.div`
    --font-size : ${props => props.styles.properties.fontSize};
    font-family: 'Sunflower', sans-serif;
   
   /**
** {
    border: 1px solid black;
   }
   */
`

// YipHomeScreenBodyGUI --------
export const StyledMainBody = styled.div`
    //background-color: #a3bac4;
    margin: 0 2rem;
    margin-top: 10vh;
    font-size: var(--font-size);    
`
export const StyledMainBodyBarrier = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StyledNotesNavigation = styled.div`
    background-color: #cedbd7;
    width: 59%;
    overflow-y: auto;
`
//



// YipHomeScreen ---------
export const StyledYipHomeScreenNavBar = styled.nav`
    border: 1px solid black;
    background-color: #1D1F21; 
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
   
   .nav-items {
        width: 25vw;
        display: flex;
        justify-content: space-between;
        margin-left: 2rem;
        padding: .5rem 0;

        a {
            text-align: center;
            text-decoration: none;
            background-color: #373943;
            color: white;
            padding: .1rem 2rem;
        }
   }

   .temp-create {
    position: absolute;
    top: 3rem;
    left: 2vw;
    text-align: center;
    text-decoration: none;
    background-color: #373943;
    color: white;
    padding: .1rem 2rem;
   }

`
//



export const StyledCreateNote = styled.div`
    background-color: #cedbd7;
    width: 40%;
    height: 80vh;
`

export const StyledKennel = styled.div`
    height: 30%;

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

export const StyledKennelBox = styled.div`
    .kennel-name {
        color: red;
    }
    .kennel-category {
        color: blue;
    }
`
export const StyledNote = styled.div`
`

export const StyledNoteLink = styled.div`
display: flex;
flex-flow: row;
    padding: 1rem;
    margin: 0 1.5rem;
    overflow: auto;

    a {
        text-decoration: none;
    }
`






