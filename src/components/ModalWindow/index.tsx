import React from "react";
import { Modal, Grid, Header } from "semantic-ui-react";
import { ILocation, ICard } from "../../store/types";
import literals from "../../literals";
import { Amount, TransactionDetail } from "./styles";

interface IModalWindow {
    data: {
        amount?: number;
        location?: ILocation;
        card?: ICard;
        date?: string;
    };
    open: boolean;
    handleClose: () => void;
}

const ModalWindow: React.FunctionComponent<IModalWindow> = ({
    open,
    data,
    handleClose
}) => {
    const { modal, generic } = literals;
    const amount = data ? data.amount : 0;
    const location = data ? data.location : { address: "", city: "" };
    const card = data ? data.card : { lastNumbers: "", scheme: "" };
    const d = data ? new Date(data.date) : new Date();

    return (
        <Modal open={open} dimmer="inverted" onClose={handleClose} closeIcon>
            <Modal.Header>{modal.title}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Amount>
                        <span>{modal.title}</span>
                        <Header as="h1">
                            {generic.currency} {amount.toFixed(2)}
                        </Header>
                    </Amount>
                    <Grid columns={2}>
                        <Grid.Column mobile={16} tablet={8} computer={8}>
                            {location.address && (
                                <TransactionDetail>
                                    <span>{modal.address}</span>
                                    <div>
                                        {location.address}, {location.city}
                                    </div>
                                </TransactionDetail>
                            )}
                            <TransactionDetail last mobile>
                                <span>{modal.date}</span>
                                <div>{`
                            ${("0" + d.getHours()).slice(-2)}:${(
                                    "0" + d.getMinutes()
                                ).slice(-2)}, 
                            ${("0" + d.getDay()).slice(-2)}
                            ${literals.modal.months[d.getMonth()]} 
                            ${d.getFullYear()}`}</div>
                            </TransactionDetail>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={8}>
                            <TransactionDetail>
                                <span>{modal.cardType}</span>
                                <div>{card.scheme.toUpperCase()}</div>
                            </TransactionDetail>
                            <TransactionDetail last>
                                <span>{modal.cardNumber}</span>
                                <div>
                                    {modal.cardHiddenNumber} {card.lastNumbers}
                                </div>
                            </TransactionDetail>
                        </Grid.Column>
                    </Grid>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};
export default ModalWindow;
