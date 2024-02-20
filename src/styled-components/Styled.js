import styled from "styled-components";

export const YipCSSStyles = styled.div`
    font-family: 'Sunflower', sans-serif;

    .button {
        align-self: flex-start;
        text-align: center;
        text-decoration: none;
        background-color: #2a2b34;
        color: white;
        font-size: 1.2em;
        border: none;
        font-weight: bold;
        padding: .1rem 2rem;
        margin: 0 .2rem;
        border-left: .4rem solid #1D1F21;
    }

    .button:hover, a:hover {
        color: grey;
    }

    .button.corner_left {
       position: fixed;
       top: 3.8rem;
       border-left: .4rem solid #373943;
       margin-left: 0;
    }

    .button.corner_left.right {
        position: fixed;
        top: 3.8rem;
        border-left: .4rem solid #373943;
        right: 0;
        margin-right: 8%;
    }

    .button.corner_left.right.save_changes {
        margin-right: 10rem;
        right: 8%
    }

    .button.disabled {
        color: grey;
        border-left: .2em solid #1D1F21;
    }

    
    .button.select_option {
        padding: 0 3.5em;
        margin-bottom: 1em;
        background-color: #373943;
    }

    .button.select_option.input {
        padding: 0 0;
        max-width: fit-content;
    }

    .button.select_option.input:hover {
        color: white;
    }
    
    .button.nav_item {
        margin-top: .5rem;
    }

    .button.submit {
        margin-top: 1.5rem;
    }



    .value {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #2a2b34;
        color: white;
        font-weight: bold;
        font-size: 1.25em;
        padding: .1rem 2rem;
        margin: .25rem .2rem;

        p {
            border-bottom: .4rem solid #373943;
        }
    }

    .value.yip_values {
        margin: -.5rem 0;
        background-color: transparent;
    }

    .value.kennel_values {
        border-bottom: .4rem solid #373943;
    }

    .value.unsaved_message {
        position: fixed;
        top: 3.8rem;
        left: 8%;
        right: 8%;
        margin-left: 24.5%;
        margin-right: 24.5%;
        font-style: italic;
    }

    .value.alert {
        margin: 1em .5em;
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

    .front {
        z-index: 9998;
    }

    @media screen and (max-width: 540px) {
        .button.corner_left {
            top: 10.15rem;
        }

        .button.corner_left.right {
            top: 10.15rem;
            margin-right: .5rem;
        }

        .button.corner_left.right.save_changes {
            right: .5rem;
        }

        .value.unsaved_message {
            top: 15.50rem;
            left: .5rem;
            right: .5rem;
            border-bottom: .2em solid white;
            margin-left: 0;
            margin-right: 0;
        }
    }

`

// YipHomeScreen ---------
export const StyledYipHomeScreenNavBar = styled.nav`
    z-index: 9999;
    background-color: #373943; 
    position: fixed;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    top: -.5rem;
   
   .nav-items {
        width: 28.5%;
        display: flex;
        justify-content: space-between;
        margin-left: 1.8rem;
        padding: .5rem 0;
   }

   img {
        height: 3rem;
        width: 3rem;
   }

   @media screen and (max-width: 540px) {
        height: 9.2rem;
        border-top: .8em solid #1d1f21;

        .nav-items {
            flex-flow: column nowrap;
            margin-left: .5rem;

            button {
                position: relative;
                margin: .55rem 0;
            }
        }
   }

`
//





// YipHomeScreenBodyGUI --------
export const StyledContentContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-height: 100%;

`
export const StyledContentTopborder = styled.div`
    height: 6rem;

    @media screen and (max-width: 540px) {
        height: 12.25rem;
    }
`
export const StyledContentbody = styled.div`
    background-color: #373943;
    margin: 0 2rem;
    overflow: auto;
    font-size: 1em;

    @media screen and (max-width: 540px) {
        margin: 0 .5rem;
    }
`

export const StyledContentYipBody = styled(StyledContentbody)`
    margin-left: 8%;
    margin-right: 8%;

    @media screen and (max-width: 540px) {
        margin: 0 .5rem;
    }
`


export const StyledQuill = styled.div`
    border: none;


    .ql-toolbar.ql-snow {
        border: none;
        border-bottom: .1em solid #ccc;
        margin-bottom: ${props => props.margin_size};
    }

    .ql-container.ql-snow {
        border: none;
    }

    .yip_info {
        display: flex;
        justify-content: space-between;
        position: absolute;
        margin-top: 2.5rem;
        left: 8%;
        right: 8%;
        background-color: #2a2b34;

       p {
        padding-top: .2em;
        padding-bottom: .2em;
       }

    }

    .quill_text_box {
        * {
            font-size: medium;
        }
    }

    @media screen and (max-width: 540px) {
        .yip_info {
            left: .5rem;
            right: .5rem;
        }
    }

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
        justify-content: space-around;
        width: 15rem;
        background-color: #2a2b34;
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

        p {
            padding-bottom: 2rem;
        }
    }

    .kennel_yip.expand {
        border-bottom: .5rem solid #1D1F21;
    }

    .kennel_expand {
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

    @media screen and (max-width: 540px) {
      width: 100%;
      overflow: hidden;

      .kennel_information {
        width: 100%;
        margin: 0 .5rem;
      }



      a {
        width: 100%;
      }

      .kennel_yip {
        width: 100%;
        align-items: center;

        * {
            padding: 0 1em;
        }

        h3 {
            text-align: center;
        }

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

`

export const StyledManageScreen = styled.div`
    margin: 1rem 8%;
    text-align: center;
`

export const StyledConditionMessage = styled.h1`
    border-bottom: .4rem solid #373943;
`

export const StyledConditionWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: #2a2b34;

    .select_container {
        margin: 0 0;
    }
  
`


