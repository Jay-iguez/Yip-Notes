import styled from "styled-components";

export const StyledTopNavigation = styled.nav`
    background-color: #a3bac4;
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
   
   .nav-items {
        width: 30vw;
        display: flex;
        justify-content: space-between;
        padding-left: 1vw;
        a {
            text-align: center;
            text-decoration: none;
            background-color: #cedbd7;
            color: black;
            padding: .1rem 2rem;
        }
   }
`