import styled, { css } from "styled-components";

export const YipCSSStyles = styled.div`
    font-family: 'Sunflower', sans-serif;
    --color-main: ${props => props.styles.color_main};
    --color-sub: ${props => props.styles.color_sub};
    --color-accent: ${props => props.styles.color_accent};
    --color-font: ${props => props.styles.color_font};

    .button {
        align-self: flex-start;
        text-align: center;
        text-decoration: none;
        background-color: var(--color-accent);
        color: var(--color-font);
        font-size: 1.2em;
        border: none;
        font-weight: bold;
        padding: .1rem 2rem;
        margin: 0 .2rem;
        border-left: .4rem solid var(--color-main);
    }

    .button:hover, a:hover {
        color: grey;
    }

    .button.corner_left {
       position: fixed;
       top: 3.8rem;
       border-left: .4rem solid var(--color-sub);
       margin-left: 0;
    }

    .button.corner_left.right {
        position: fixed;
        top: 3.8rem;
        border-left: .4rem solid var(--color-sub);
        right: 0;
        margin-right: 8%;
    }

    .button.corner_left.right.save_changes {
        margin-right: 10rem;
        right: 8%
    }

    .button.disabled {
        color: grey;
        border-left: .2em solid var(--color-main);
    }

    
    .button.select_option {
        padding: 0 3.5em;
        margin-bottom: 1em;
        background-color: var(--color-sub);
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .button.select_option.input {
        padding: 0 0;
        max-width: fit-content;
    }

    .button.select_option.input:hover {
        color: var(--color-font);
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
        background-color: var(--color-accent);
        color: var(--color-font);
        font-weight: bold;
        font-size: 1.25em;
        padding: .1rem 2rem;
        margin: .25rem .2rem;

        p {
            border-bottom: .4rem solid var(--color-sub);
        }

        .color_box {
            width: 2.5em;
            height: 2.5em;
            margin: .8em;
            border: .2em solid gray;
        }
    }

    .value.yip_values {
        margin: -.5rem 0;
        background-color: transparent;
    }

    .value.kennel_values {
        border-bottom: .4rem solid var(--color-sub);
    }

    .value.unsaved_message {
        position: fixed;
        top: 6.2rem;
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
        background-color: var(--color-accent);
        border-left: .4rem solid var(--color-main);
        margin-left: 1rem;
        margin-right: 1rem;
        padding: 0 1rem;
       
    }
    

    a {
        text-decoration: none;
    }

    * {
        color: var(--color-font);
    }

    .front {
        z-index: 9998;
    }

    @media screen and (max-width: 730px) {
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

        .button.select_option {
            padding: 0 1em;
        }

        .value.unsaved_message {
            top: 12.50rem;
            left: .5rem;
            right: .5rem;
            border-bottom: .2em solid var(--color-font);
            margin-left: 0;
            margin-right: 0;
        }
    }

    @media screen and (max-width: 450px) {
        .button.corner_left {
            top: 12.15rem;
        }

        .button.corner_left.right {
            top: 12.15rem;
        }

        .button.corner_left.right.save_changes {
            top: 9.85rem;
            margin-right: 0;
        }

        .value.value.unsaved_message {
            top: 14.50rem;
        }
    }

`

// YipHomeScreen ---------
export const StyledYipHomeScreenNavBar = styled.nav`
    z-index: 9999;
    background-color: var(--color-sub); 
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

   @media screen and (max-width: 730px) {
        height: 9.2rem;
        border-top: .8em solid var(--color-main);

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

    @media screen and (max-width: 730px) {
        height: 12.25rem;
    }

    @media screen and (max-width: 450px) {
        height: 14.25rem;
    }
`
export const StyledContentbody = styled.div`
    background-color: var(--color-sub);
    margin: 0 2rem;
    overflow: auto;
    font-size: 1em;

    @media screen and (max-width: 730px) {
        margin: 0 .5rem;
    }
`

export const StyledContentYipBody = styled(StyledContentbody)`
    margin-left: 8%;
    margin-right: 8%;

    @media screen and (max-width: 730px) {
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
        background-color: var(--color-accent);

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

    @media screen and (max-width: 730px) {
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
    background-color: var(--color-sub);
    border-bottom: .5rem solid var(--color-main);


    
`

export const StyledKennelContentBox = styled.div`
    height: ${props => props.view === '' ? '15rem' : '7.5rem'}; // Need to be changed
    margin: 0 0;
    margin-right: ${props => props.margin_right === 0 ? '1rem' : '.6rem'};

   ${props => props.max_on_query === true &&
        css`
        width: 100%;
    `}

    margin-left: .5rem;
    padding: 1rem 0;
    display: flex;

    .kennel_information {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        width: 20rem;
        background-color: var(--color-accent);
    }

    .kennel_yip {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: start;
        background-color: var(--color-accent);
        border-left: .4rem solid var(--color-main);
        overflow: hidden;
        width: 20rem;
        height: 100%;

        h3, p {
            color: var(--color-font);
        };

        h3 {
            border-bottom: .4rem solid var(--color-sub);
            font-style: italic;
        }

        p {
            padding-bottom: 2rem;
        }
    }

    .kennel_yip.expand {
        border-right: 1rem solid var(--color-main);
    }

    @media screen and (max-width: 1250px) {
        .kennel_yip {
            width: 32.5rem;
        }

        .kennel_information {
            width: 100%
        }
    }

    @media screen and (max-width: 1155px) {
        width: 100%;
        margin: 0 .5rem;
        overflow: hidden;
        
        .kennel_yip {
            width: 100%;
        }

        a {
            width: 100%;
        }
    }

    @media screen and (max-width: 730px) {
        width: 100%;
        overflow: hidden;
        margin: 0 .5rem;

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

    @media screen and (max-width: 730px) {
        margin: 1rem .5rem
    }
`

export const StyledConditionMessage = styled.h1`
    border-bottom: .4rem solid var(--color-sub);
`

export const StyledConditionWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: var(--color-accent);
    width: 100%;

    .select_container {
        margin: 0 0;
    }
  
`


