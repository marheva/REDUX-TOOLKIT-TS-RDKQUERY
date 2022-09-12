import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GithubStatePropsTypes } from './types';

const LS_FAVOURITE_KEY = 'rfk';

const initialState: GithubStatePropsTypes = {
    favourites: JSON.parse(localStorage.getItem(LS_FAVOURITE_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload);
            localStorage.setItem(LS_FAVOURITE_KEY, JSON.stringify(state.favourites));
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter((favouriteId) => {
                return favouriteId !== action.payload;
            });
            localStorage.setItem(LS_FAVOURITE_KEY, JSON.stringify(state.favourites));
        },
    },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
