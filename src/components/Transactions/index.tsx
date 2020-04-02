import React, { useEffect, useState } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import Transaction from "./Transaction";
import LazyLoader from "../LazyLoader";
import { IItem, IError } from "../../store/types";
import { StyledSegmentGroup } from "./styles";
import literals from "../../literals";
import ModalWindow from "../ModalWindow";

interface ITransactions {
    fetchTransactions: () => void;
    transactions: IItem[];
    loading: boolean;
}

const Transactions: React.FunctionComponent<ITransactions> = ({
    fetchTransactions,
    transactions,
    loading
}) => {
    const [modal, setModal] = useState({ open: false, data: null });
    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleClick = item => {
        setModal({
            open: true,
            data: item
        });
    };

    const handleClose = () => setModal({ open: false, data: null });

    return (
        <Container>
            <Header as="h1" onClick={fetchTransactions}>
                {literals.transactions.title}
            </Header>
            {transactions.length ? (
                <div>
                    <StyledSegmentGroup>
                        <Segment.Group>
                            {transactions.map(
                                (transaction: IItem, i: number) => (
                                    <Transaction
                                        testId={`transaction-${i}`}
                                        key={transaction.id}
                                        data={{
                                            card: transaction.card,
                                            location: transaction.location,
                                            amount: transaction.amount,
                                            date: transaction.created
                                        }}
                                        handleClick={handleClick}
                                    />
                                )
                            )}
                        </Segment.Group>
                    </StyledSegmentGroup>
                    <LazyLoader
                        getData={fetchTransactions}
                        isLoading={loading}
                    />
                </div>
            ) : (
                !loading && (
                    <Header as="h4">
                        {literals.transactions.noTransactions}
                    </Header>
                )
            )}

            <ModalWindow
                open={modal.open}
                data={modal.data}
                handleClose={handleClose}
            />
        </Container>
    );
};

export default Transactions;
