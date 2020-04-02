export enum actionTypes {
    SAVE_TRANSACTIONS = "SAVE_TRANSACTIONS",
    SAVE_ERROR = "SAVE_ERROR",
    SET_LOADING = "SET_LOADING"
}

export interface IInitialState {
    data: IItem[];
    pagination: {
        previous: string;
        next: string;
    };
    error: IError;
    loading: boolean;
}

export interface IError {
    status: string;
    code: string;
    date: string;
    message: string;
}

export interface IItem {
    currency: string;
    programId: string;
    id: string;
    accountId: string;
    created: string;
    updated: string;
    amount: number;
    cleared: boolean;
    wallet: any;
    datetime: string;
    card: ICard;
    location: ILocation;
    brand: IBrand;
    identifiers: IIdentifiers;
}

export interface ICard {
    id: string;
    lastNumbers: string;
    scheme: string;
}

export interface ILocation {
    address: string;
    city: string;
    countryCode: string;
    id: string;
    geolocation: any;
    postcode: string;
    timezone: any;
    metadata: any;
}

interface IBrand {
    id: string;
    name: any;
    logoURL: any;
    metadata: any;
}

interface IIdentifiers {
    MID: string;
    mastercardTransactionSequenceNumber: any;
    mastercardRefNumber: any;
    amexApprovalCode: any;
    visaAuthCode: any;
}
