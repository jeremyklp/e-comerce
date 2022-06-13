import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setisLoading } from './isLoading.slice';
import getconfig from '../../utils/getconfig'

export const purchase = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
            setpurchases: (state, action) => {
                return action.payload
            }
    }
})

export const { setpurchases } = purchase.actions;

export const getpurchases = () => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getconfig())
        .then(res => dispatch(res.data))
        .finally(() => dispatch(setisLoading(false)));
}
export default purchase.reducer;
