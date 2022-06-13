import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getconfig from '../../utils/getconfig';
import { setisLoading } from './isLoading.slice';

export const cartslice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
            setcart:( state, action)=> {
                return action.payload
            }
    }
})

export const { setcart } = cartslice.actions;

export const cartthunk = () => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getconfig())
        .then((res) => dispatch(setcart (res.data)))
        .finally(() => dispatch(setisLoading(false)));
}

export default cartslice.reducer;
