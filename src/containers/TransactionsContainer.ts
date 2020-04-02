import { connect } from "react-redux";
import Transactions from "../components/Transactions";
import { fetchTransactions } from "../store/actions";
import { IInitialState } from "../store/types";

const mapStateToProps = (state: IInitialState) => ({
    transactions: state.data,
    loading: state.loading
});

const mapDispathToProps = {
    fetchTransactions
};

export default connect(mapStateToProps, mapDispathToProps)(Transactions);
