import { createSlice } from "@reduxjs/toolkit";

export const serviceOrderSlice = createSlice({
  name: "serviceOrder",
  initialState: {
    technical: "JOSÉ RAÚL DAVILA AGUILAR",
    date: "2023-05-15",
    number: "2023-ST02235",
    business_name: "COESTI S.A.",
    branch: "E/S FRUTALES",
    direction: "AV. LOS FRUTALES 994 URB. CAMINO REAL",
    contact: "ISABEL JUDITH VALVERDE AYALA",
    phone: 984524378,
    mail: "correo@correo.com",
    used_materials: [
      {
        id: 1,
        name: "Cable Telefonico (07 Mtrs) | 1 ",
        amount: 1,
        branch: "marca",
        model: "modelo",
      },
      {
        id: 2,
        name: "Cable Telefonico (07 Mtrs) | 2 ",
        amount: 1,
        branch: "marca",
        model: "modelo",
      },
      {
        id: 3,
        name: "Cable Telefonico (07 Mtrs) | 3",
        amount: 1,
        branch: "marca",
        model: "modelo",
      },
    ],
    loading: false,
  },
  reducers: {
    DeleteMaterialUsed: (state, action) => {
      const { id } = action.payload;
      const index_material = state.used_materials.findIndex(
        (material) => material.id == id
      );

      const materials = state.used_materials.splice(index_material, 1);
      console.log(materials);
    },
  },
});

export const { DeleteMaterialUsed } = serviceOrderSlice.actions;

export default serviceOrderSlice.reducer;
