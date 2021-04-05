import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSpecialsAsyncAction } from "../asyncActions/specialAsyncActions";
import { Special } from './../../models/Specials';

export interface SpecialState {
  specials: Special[];
}

const initialState: SpecialState = {
  specials: [],
};

// set enabled config true or false
const setSpecials = (state: SpecialState, action: PayloadAction<{ specials: Special[] }>) => {
  state.specials = action.payload.specials;
};

const specialSlice = createSlice({
  name: 'special',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSpecialsAsyncAction.fulfilled, setSpecials)
  }
});


export default specialSlice.reducer;