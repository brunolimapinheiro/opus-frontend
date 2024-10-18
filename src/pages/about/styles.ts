import Styled from "styled-components";
import {theme} from "../../styles/theme";

export const DivMain = Styled.div`
    width: 100vw;
    height: 100vh;
    background:${theme.colors.colorFour} ;
    text-align:center;
    padding: 25px;
`

export const DivAbout = Styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-around;


`
export const DivText = Styled.div`
    width: 450px;
    height: 200px;
    padding: 40px;
    text-align:justify;

`
export const P = Styled.p`
    color: ${theme.colors.colorOne};
`

export const H1 = Styled.h1`

    color: ${theme.colors.colorOne};
    font-weight:bold;


`