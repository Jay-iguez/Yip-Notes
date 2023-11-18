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

// YipHomeScreen ---------
export const StyledYipHomeScreenNavBar = styled.nav`
    background-color: #373943; 
    position: fixed;
    width: 100%;
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
            background-color: #2a2b34;
            color: white;
            padding: .1rem 2rem;
            margin: 0 .2rem;
            border-right: .4rem solid #1D1F21;
        }
   }

`
//



// YipHomeScreenBodyGUI --------
export const StyledYipHomeScreenGUI_ContentContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-height: 100vh;
`
export const StyledYipHomeScreenGUI_ContentTopBorder = styled.div`
    height: 4.5vh;
`
export const StyledYipHomeScreenGUI_Content = styled.div`
    background-color: #373943;
    max-height: 91.5vh; // needs to be fixed
    margin: 0 2rem;
    overflow: auto;
    font-size: var(--font-size); 
    display: flex;
    flex-flow: column nowrap;
`



export const StyledCreateNote = styled.div`
    background-color: #cedbd7;
    width: 40%;
    height: 80vh;
`

// YipKennel --------
export const StyledYipKennel_KennelContainer = styled.div`
    height: 30%;
    display: flex;
    flex-flow: row nowrap;
    background-color: #373943;
    border-bottom: .5rem solid #1D1F21;
    overflow: auto;
`

export const StyledYipKennel_KennelItemBox = styled.div`
    height: 15rem; // Need to be changed
    width: 15rem;
    margin: 0 .5rem;
    padding: 1rem 0;
    display: flex;

    .kennel_information {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        width: 15rem;
        height: 100%;

        h3 {
            background-color: #2a2b34;
            color: #cdcfd0;
        }
        
        button {
            text-decoration: none;
            color: white;
            background-color: #2a2b34;
            border: none;
            border-right: .4rem solid #1D1F21;
        }
    }


    a {
        text-decoration: none;
    }

    .kennel_yip {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: start;
        background-color: #2a2b34;
        border-right: .4rem solid #1D1F21;
        width: 15rem;
        height: 100%;

        h3, p {
            color: #cdcfd0;
        };

        h3 {
            border-bottom: .4rem solid #373943;
        }
    }
`
//





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






