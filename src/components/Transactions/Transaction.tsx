import React from "react";
import { Grid, Segment, Header } from "semantic-ui-react";
import { LeftColumn, RightColumn } from "./styles";
import literals from "../../literals";
import { ILocation, ICard } from "../../store/types";

interface ITransaction {
    testId: string;
    data: {
        amount: number;
        location: ILocation;
        card: ICard;
        date: string;
    };
    handleClick?: (item) => void;
}

const Transaction: React.FunctionComponent<ITransaction> = ({
    data,
    testId,
    handleClick
}) => {
    const { date, location, amount } = data;
    const d = new Date(date);
    return (
        <Segment
            onClick={() => handleClick({ ...data, date: d })}
            data-testid={testId}
        >
            <Grid columns={2}>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <LeftColumn>
                        <div className="address">{location.address}</div>
                        <div className="date">
                            {`
                            ${("0" + d.getHours()).slice(-2)}:${(
                                "0" + d.getMinutes()
                            ).slice(-2)}, 
                            ${("0" + d.getDay()).slice(-2)}/${(
                                "0" +
                                (d.getMonth() + 1)
                            ).slice(-2)}/${d.getFullYear()}`}
                        </div>
                    </LeftColumn>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <RightColumn>
                        <Header as="h3" className="amount">
                            {literals.generic.currency} {amount.toFixed(2)}
                        </Header>
                    </RightColumn>
                </Grid.Column>
            </Grid>
        </Segment>
    );
};

export default Transaction;
