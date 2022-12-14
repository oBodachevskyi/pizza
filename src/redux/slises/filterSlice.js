import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortPropperty: 'rating',
        sortType: 'desc'
    }
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSortParam(state, action) {
         state.sort = {...state.sort, ...action.payload }
    }
    }
})

export const { setCategoryId, setSortParam } = filterSlice.actions;

export default filterSlice.reducer

