import styled from "styled-components";

export const YipCSSStyles = styled.div`
    --font-size : ${props => props.styles.properties.fontSize};
    font-family: 'Sunflower', sans-serif;
   
    .button {
        align-self: flex-start;
        text-align: center;
        text-decoration: none;
        background-color: #2a2b34;
        color: white;
        border: none;
        font-weight: bold;
        font-size: 1rem;
        padding: .1rem 2rem;
        margin: 0 .2rem;
        margin-top: .5rem;
        border-left: .4rem solid #1D1F21;
    }

    .button:hover, a:hover {
        color: grey;
    }

    .intro_message {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: start;
        background-color: #2a2b34;
        border-left: .4rem solid #1D1F21;
        margin-left: 1rem;
        margin-right: 1rem;
        padding: 0 1rem;
       
    }
    

    a {
        text-decoration: none;
    }

    * {
        color: #cdcfd0;
    }

    .caret {
        border-left: solid 3.5rem transparent; 
        border-bottom: solid 3.5rem #fff; 
        height: 0; 
        width: 0; 
    }

`

// YipHomeScreen ---------
export const StyledYipHomeScreenNavBar = styled.nav`
    background-color: #373943; 
    position: fixed;
    width: 100%;
    display: flex;
    top: 0;
   
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
            font-size: 1rem;
            border-left: .4rem solid #1D1F21;
        }
   }

`
//



// YipHomeScreenBodyGUI --------
export const StyledContentContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-height: 100vh;

`
export const StyledContentTopborder = styled.div`
    height: 5vh;
`
export const StyledContentbody = styled.div`
    background-color: #373943;
    max-height: 91.5vh; // needs to be fixed
    margin: 0 2rem;
    overflow: auto;
    font-size: var(--font-size); 
    display: flex;
    flex-flow: column nowrap;
`
// YipStartIntroMessage




export const StyledCreateNote = styled.div`
    background-color: #cedbd7;
    width: 40%;
    height: 80vh;
`

// YipKennel --------
export const StyledKennelContainer = styled.div`
    height: 30%;
    display: flex;
    flex-flow: row wrap;
    background-color: #373943;
    border-bottom: .5rem solid #1D1F21;
    
`

export const StyledKennelContentBox = styled.div`
    height: ${props => props.view === '' ? '15rem' : '7.5rem'}; // Need to be changed
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
        
        .button.edit_kennel {
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
        border-left: .4rem solid #1D1F21;
        overflow: hidden;
        width: 15rem;
        height: 100%;

        h3, p {
            color: #cdcfd0;
        };

        h3 {
            border-bottom: .4rem solid #373943;
            font-style: italic;
        }
    }

    .kennel_yip.expand {
        border-bottom: .5rem solid #1D1F21;
    }

    .kennel_expand {
        border: 1px solid red;
        display: flex;
        justify-content: space-between;
        flex-flow: row nowrap;

        .caret {
           margin-left: 8rem;
           position: relative;
        }

        button {
            text-decoration: none;
            background: none;
	        color: inherit;
	        border: none;
	        padding: 0;
	        font: inherit;
	        cursor: pointer;
	        outline: inherit;
            width: 0;
        }
    }
`
//


export const StyledNoteLink = styled.div`
display: flex;
flex-flow: row;
    padding: 1rem;
    margin: 0 1.5rem;
    overflow: auto;

    a {
       
    }
`






