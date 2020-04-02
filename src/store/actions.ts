import apiService from "../services";
import { actionTypes } from "./types";

export const saveTransactions = payload => ({
    type: actionTypes.SAVE_TRANSACTIONS,
    payload
});

export const saveError = payload => ({
    type: actionTypes.SAVE_ERROR,
    payload
});

export const setLoading = payload => ({
    type: actionTypes.SET_LOADING,
    payload
});

export const fetchTransactions = () => async (dispatch, getState) => {
    dispatch(setLoading(true));

    const { pagination } = getState();
    const data = await apiService.getTransactions(pagination.next);

    if (data.status >= 200 && data.status < 300) {
        dispatch(saveTransactions(data));
    } else {
        dispatch(saveError({ status: data.status, ...data.error }));
    }

    dispatch(setLoading(false));
};
