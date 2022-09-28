import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { personsReducer as persons } from '../store/reducers/persons';

const makeStore = () => (
    configureStore({
        reducer : {
            persons: persons
        },
        devTools: process.env.NODE_ENV !== 'production',
        enhancers: [],
}));


export type Store = ReturnType<typeof makeStore>
export type State = ReturnType<Store['getState']>;

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const wrapper = createWrapper<Store>(makeStore);