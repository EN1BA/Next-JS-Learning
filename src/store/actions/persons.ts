import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPerson, getPersons } from '../../api/persons';

export const getPersonsAction = createAsyncThunk('persons/getPersons', async () => {
    return await getPersons();
});

export const getPersonAction = createAsyncThunk('person/getPerson', async (id: number) => {
    return await getPerson(id);
});