import { createSlice } from '@reduxjs/toolkit';

export const isLoadinSlice = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
            setisLoading: (state , action)=>{
                return action.payload
            }
    }
})

export const { setisLoading } = isLoadinSlice.actions;

export default isLoadinSlice.reducer;
