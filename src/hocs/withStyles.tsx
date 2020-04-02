import React from "react";
import GlobalStyles, { AppWrapper } from "../styles";

const withStyles = (Component: React.FunctionComponent) => {
    return (
        props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
    ) => (
        <div>
            <GlobalStyles />
            <AppWrapper>
                <Component {...props} />
            </AppWrapper>
        </div>
    );
};

export default withStyles;
