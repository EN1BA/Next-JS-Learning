import { ActionCreatorWithoutPayload, AnyAction, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { FetchStatus } from "../../types/api";
import { Person } from "../../types/person";
import { getPersonAction, getPersonsAction } from "../actions/persons";


export interface PersonsState {
    persons?: Person[];
    person?:Person;
    fetchStatus: FetchStatus;
    error: unknown;
}

const initialState : PersonsState = {
    persons:[],
    person: {} as Person,
    fetchStatus: FetchStatus.INITIAL,
    error: null,
}

const personsSlice = createSlice<PersonsState, SliceCaseReducers<PersonsState>>({
    name: 'persons',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonsAction.pending, (state) => {
            state.fetchStatus = FetchStatus.FETCHING;
            state.error = null;
        });
        builder.addCase(getPersonsAction.fulfilled, (state, { payload }) => {
            state.fetchStatus = FetchStatus.FETCHED;
            state.persons = payload;
        });
        builder.addCase(getPersonsAction.rejected, (state, { error }) => {
            state.fetchStatus = FetchStatus.ERROR;
            state.error = error;
        });
        builder.addCase(getPersonAction.pending, (state) => {
            state.fetchStatus = FetchStatus.FETCHING;
            state.error = null;
        });
        builder.addCase(getPersonAction.fulfilled, (state, { payload }) => {
            state.fetchStatus = FetchStatus.FETCHED;
            state.person = payload;
        });
        builder.addCase(getPersonAction.rejected, (state, { error }) => {
            state.fetchStatus = FetchStatus.ERROR;
            state.error = error;
        });
    },
});

export const resetPersonsState = personsSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const personsReducer = personsSlice.reducer;