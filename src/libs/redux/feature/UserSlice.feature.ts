import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "prueba",
  initialState: {
    name: "prueba",
    dni: 0,
    id: 0,
    type: 0,
    loading: false,
  },
  reducers: {
    SetUser: (state, action) => {
      const { name, dni, id, type } = action.payload;
      state.name = name;
      state.dni = dni;
      state.id = id;
      state.type = type;
    },
  },
});

export const { SetUser } = UserSlice.actions;

export default UserSlice.reducer;
