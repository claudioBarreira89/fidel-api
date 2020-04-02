import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

interface ITransactionDetail {
    last?: boolean;
    mobile?: boolean;
}

export const StyledModal = styled.div`
    > .close {
        color: ${colors.dark};
    }
`;

export const Amount = styled.div`
    text-align: center;

    .ui.header {
        margin-top: 0;
        margin-bottom: 1.4rem;
    }

    span {
        color: ${colors.darkGray};
    }
`;

export const TransactionDetail = styled.div<ITransactionDetail>`
    margin-top: 1.2rem;

    span {
        color: ${colors.darkGray};
    }

    div {
        font-size: 1.2rem;
        ${({ last }) =>
            !last &&
            ` 
            padding-bottom: 1rem;
            border-bottom: 1px solid ${colors.gray};    
         `}

        ${({ mobile }) =>
            mobile &&
            `
             @media(max-width: ${breakpoints.mobile}) {
                padding-bottom: 1rem;
                border-bottom: 1px solid ${colors.gray};    
                margin-bottom: -2rem;
            }    
             `}
    }
`;
