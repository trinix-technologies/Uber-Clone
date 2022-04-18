import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInInformation: (state, action) => {
      state.travelTimeInInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInInformation } =
  navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInInformation = (state) =>
  state.nav.travelTimeInInformation;

export default navSlice.reducer;
