import { actionTypes, IInitialState } from "./types";

export const initialState: IInitialState = {
    data: [],
    pagination: {
        previous: null,
        next: null
    },
    error: {
        status: null,
        code: null,
        date: null,
        message: null
    },
    loading: false
};

export const reducer = (
    state = initialState,
    action: { type: any; payload: any }
) => {
    const { payload } = action;

    switch (action.type) {
        case actionTypes.SAVE_TRANSACTIONS: {
            return {
                ...state,
                error: {
                    ...initialState.error
                },
                data: [...state.data, ...payload.items],

                pagination: {
                    next: payload.last,
                    previous: payload.start
                }
            };
        }
        case actionTypes.SAVE_ERROR: {
            return {
                ...state,
                data: initialState.data,
                pagination: {
                    ...initialState.pagination
                },
                error: payload
            };
        }
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                loading: payload
            };
        }
        default: {
            return state;
        }
    }
};
