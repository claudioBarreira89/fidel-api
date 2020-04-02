const transaction = {
    currency: "GBP",
    programId: "2314f371-39b1-4c80-8040-4144ff1bad09",
    id: "5f68d602-664a-493f-89d4-901a053077cb",
    accountId: "d346d574-d5c2-4a0e-8e02-ffd713fd1a8d",
    created: "2017-06-16T17:15:25.866Z",
    updated: "2017-06-16T17:15:25.866Z",
    amount: 48.77943451477946,
    cleared: true,
    wallet: null,
    datetime: "Wed Sep 27 2017 01:00:00 GMT+0100 (WEST)",
    card: {
        id: "61a401b5-5d92-402f-8d86-89dfa15b515b",
        lastNumbers: "4009",
        scheme: "visa"
    },
    location: {
        address: "Google Street 4",
        city: "Angular4",
        countryCode: "GBR",
        id: "3690099c-1970-4f96-891e-11f991ccce71",
        geolocation: null,
        postcode: "NG-4",
        timezone: null,
        metadata: null
    },
    brand: {
        id: "073f6cda-1846-42df-845a-2a28e9be10f9",
        name: null,
        logoURL: null,
        metadata: null
    },
    identifiers: {
        MID: "770055002234",
        mastercardTransactionSequenceNumber: null,
        mastercardRefNumber: null,
        amexApprovalCode: null,
        visaAuthCode: null
    }
};

export const mockedState = {
    transactions: [
        {
            ...transaction,
            id: "1",
            amount: 10,
            location: { ...transaction.location, address: "address_1" }
        },
        {
            ...transaction,
            id: "2",
            amount: 13
        },
        {
            ...transaction,
            id: "3",
            amount: 41
        },
        {
            ...transaction,
            id: "4",
            amount: 54
        }
    ]
};
