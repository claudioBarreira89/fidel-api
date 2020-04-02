import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,700i');

    body, html {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        line-height: 1.5;
        color: ${colors.dark};
        background-color: ${colors.gray};
    }

    * {
        margin: 0;
        padding: 0;
    }

    .ui.modal > .close {
        color: ${colors.dark};
    }
`;

export const AppWrapper = styled.div`
    margin: 0 auto;
    padding: 2rem 0;
    max-width: 1100px;
`;

export { default as breakpoints } from "./breakpoints";
export { default as colors } from "./colors";
export default GlobalStyles;
