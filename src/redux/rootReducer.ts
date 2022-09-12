import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { githubApi } from './githubReducer/github.api';
import { githubReducer } from './githubReducer/github.slice';

export const rootReducer = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github: githubReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(rootReducer.dispatch);

export type AppStatePropsType = ReturnType<typeof rootReducer.getState>;
