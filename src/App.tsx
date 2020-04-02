import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Transactions from "./containers/TransactionsContainer";
import withStyles from "./hocs/withStyles";

const App = () => {
    return (
        <Provider store={store}>
            <Transactions />
        </Provider>
    );
};

export default withStyles(App);
