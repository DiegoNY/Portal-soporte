import { createSlice } from "@reduxjs/toolkit";

type used_materials = {
  id: number;
  id_add_material: number;
  name: string;
  amount: number;
  branch: string;
  model: string;
};

const used_materials: used_materials[] = [];

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
    name_customer: "",
    dni_ruc_customer: "",
    signature_customer: {},
    materials: [
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
    used_materials: used_materials,
    id_materials_used: 1,
    view_modal_used_mterials: false,
    loading: false,
  },
  reducers: {
    DeleteMaterialUsed: (state, action) => {
      const { id } = action.payload;
      console.log(id);

      const index_material = state.used_materials.findIndex(
        (material) => material?.id_add_material === id
      );

      if (index_material !== -1) {
        state.used_materials.splice(index_material, 1);
      }
    },
    ChangeViewAddUsedMaterials: (state) => {
      state.view_modal_used_mterials = !state.view_modal_used_mterials;
    },
    AddUsedMaterial: (state, action) => {
      const { material } = action.payload;
      state.used_materials.push({
        ...material,
        id_add_material: state.id_materials_used++,
      });
    },
    ChangeUsedMaterial: (state, action) => {
      const { id, values }: { id: any; values: any } = action.payload;
      const index = state.used_materials.findIndex(
        (material) => material?.id_add_material === id
      );

      let key: string | keyof used_materials;
      key = Object.keys(values)[0];
      switch (key) {
        case "amount":
          state.used_materials[index][key] = values[key];
          break;
        case "branch":
          state.used_materials[index][key] = values[key];
          break;
        case "model":
          state.used_materials[index][key] = values[key];
          break;
        default:
          break;
      }
    },
    ChangeService: (state, action) => {
      const { name, value } = action.payload;
      switch (name) {
        case "signature_customer":
          state.signature_customer = value;
          break;
        case "dni_ruc_customer":
          state.dni_ruc_customer = value;
          break;
        case "name_customer":
          state.name_customer = value;
          break;
        default:
          break;
      }
    },
  },
});

export const {
  DeleteMaterialUsed,
  ChangeViewAddUsedMaterials,
  AddUsedMaterial,
  ChangeService,
  ChangeUsedMaterial,
} = serviceOrderSlice.actions;

export default serviceOrderSlice.reducer;
