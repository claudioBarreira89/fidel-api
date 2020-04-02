import styled from "styled-components";
import { colors } from "../../styles";

export const StyledSegmentGroup = styled.div`
    .ui.segments {
        border: 0;
        cursor: pointer;
    }

    .ui.segments > .segment {
        border-top: 1px solid rgba(34, 36, 38, 0.08);
    }

    .ui.segment {
        transition: 0.3s ease-in-out;
    }

    .ui.segment:hover {
        background-color: ${colors.gray};
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 0.8rem 1.2rem;
    height: 100%;

    .address {
        font-size: 1.2rem;
    }

    .date {
        font-size: 0.8rem;
        color: ${colors.darkGray};
        letter-spacing: 1px;
    }
`;

export const RightColumn = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    text-align: right;
    padding: 0.8rem 1.2rem;

    .amount {
        font-weight: 300;
        margin: 0 0 0 auto;
    }
`;
