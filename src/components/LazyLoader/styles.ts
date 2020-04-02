import styled from "styled-components";
import { colors } from "../../styles";

export const StyledLazyLoader = styled.div`
    width: 100px;
    height: 52px;
    padding: 1rem;
    margin: 1.2rem auto 0;
    text-align: center;
    border-radius: 0.3rem;
    background-color: ${colors.white};

    display: flex;
    align-items: center;

    .loadMore {
        width: 100%;
    }

    .ui.loader {
        margin: auto;
    }
`;
