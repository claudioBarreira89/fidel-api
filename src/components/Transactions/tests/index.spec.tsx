import React from "react";
import Transactions from "../";
import { render, fireEvent } from "@testing-library/react";
import literals from "../../../literals";
import { mockedState } from "./mockedState";

const props = {
    fetchTransactions: jest.fn(),
    transactions: mockedState.transactions,
    loading: false
};

describe("AddVehicle/views/Ownership.js", () => {
    it("Should exist", () => {
        const { container } = render(<Transactions {...props} />);
        expect(container).not.toBeNull();
    });

    describe("Mounting component", () => {
        it("Should fetch transactions on mount", () => {
            const fetchTransactions = jest.fn();

            render(
                <Transactions
                    {...props}
                    fetchTransactions={fetchTransactions}
                />
            );

            expect(fetchTransactions).toHaveBeenCalled();
        });
    });

    describe("Rendering component", () => {
        it("Should render transactions list", () => {
            const { getByText } = render(<Transactions {...props} />);

            expect(getByText("£ 10.00")).toBeDefined();
            expect(getByText("£ 13.00")).toBeDefined();
            expect(getByText("£ 41.00")).toBeDefined();
            expect(getByText("£ 54.00")).toBeDefined();
        });

        it("Should not render any transaction", () => {
            const { getByText } = render(
                <Transactions {...props} transactions={[]} />
            );
            expect(
                getByText(literals.transactions.noTransactions)
            ).toBeDefined();
        });
    });

    describe("Clicking list component", () => {
        it("Should open modal window with details", () => {
            const { getByTestId, getByText } = render(
                <Transactions {...props} />
            );

            fireEvent.click(getByTestId("transaction-1"));

            expect(getByText("address_1")).toBeDefined();
        });
    });
});
