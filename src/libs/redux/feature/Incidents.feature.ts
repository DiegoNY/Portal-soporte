import {
  categories,
  companies,
  branchs,
  incidencias,
  sub_categories,
  type_contacts,
  contacts,
  SliceTypeIncidents,
} from "@/types/incidents";
import { Incidencia } from "@/types/incidents/Incidents.type";
import {
  AddCompanyType,
  AddContactType,
} from "@/types/incidents/Reducers.type";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import stations from "../../../config/types.stations.json";
import priorities from "../../../config/pryorities.json";
import levels from "../../../config/levels.json";
import { Categories, SubCategoria } from "@/types/incidents/Categories.type";
import { Sucursale } from "@/types/incidents/Companies.type";
import { IncidentService } from "@/server/types/Incident.type";

export const fetchIncidents = createAsyncThunk(
  "product/fetchIncidents",
  async () => {
    const data = await axios.get("http://192.168.1.110:3005/api/incidents");
    return data;
  }
);

export const saveIncidents = createAsyncThunk(
  "incident/saveIncidents",
  async (data: IncidentService) => {
    const rta = await axios.post(
      "http://192.168.1.110:3005/api/incidents",
      data
    );
    return rta;
  }
);

export const Incidents = createSlice({
  name: "incidents",
  initialState: {
    incident_record: false,
    incidents: incidencias,
    show_incidents: [],
    company: "",
    business_name: "",
    branch: "",
    branch_id: 0,
    contact_name: "",
    contact_dni: "",
    contact_number: "",
    contact_email: "",
    contact_post: "",
    stations_types: stations,
    station_type: "",
    priorities: priorities,
    priority: 0,
    levels: levels,
    level: 0,
    id_subcategory: 0,
    cod_subcategory: "",
    subcategory: "",
    date: "",
    hour: "",
    view_detail: false,
    companies: companies,
    branchs: branchs,
    categories: categories,
    categories_to_display: categories,
    sub_categories: sub_categories,
    data_detail: {},
    load: false,
    error: false,
    contacts: contacts,
    types_contacts: type_contacts,
    id_company: 0,
  } as SliceTypeIncidents,
  reducers: {
    ChangeIssueView: (state) => {
      state.incident_record = !state.incident_record;
    },
    ChangeViewDetail: (state, action) => {
      const { data } = action.payload;
      if (state.view_detail == false) {
        state.view_detail = true;
        state.data_detail = data;
      } else {
        state.view_detail = false;
      }
    },
    AddCompany: (state, action: PayloadAction<AddCompanyType>) => {
      const { company, SearchCompany } = action.payload;
      if (!SearchCompany && company) {
        state.company = company.ruc_empresa;
        state.branchs = company.sucursales;
        state.business_name = company.razon_social;
        state.id_company = company.id_empresa;
      } else {
        state.branchs = [];
      }
    },
    AddContact: (state, action: PayloadAction<AddContactType>) => {
      const { SearchContact, contact } = action.payload;
      if (!SearchContact && contact) {
        state.contact_name = contact.nombres;
        state.contact_dni = contact.dni_inf;
        state.contact_number = contact.telefono;
        state.contact_email = contact.correo;
        state.contact_post = contact.cargo;
      }
    },
    AddSubCategories: (state, action: PayloadAction<Categories>) => {
      const categorie = action.payload;
      state.sub_categories = categorie.sub_categorias;
    },
    AddSubCategorie: (state, action: PayloadAction<SubCategoria>) => {
      const sub_categorie = action.payload;
      state.id_subcategory = sub_categorie.id;
      state.subcategory = sub_categorie.sub_categoria;
      state.cod_subcategory = sub_categorie.codigo_sub;
    },
    ChangeIncidents: (
      state: any,
      action: PayloadAction<{
        name: keyof SliceTypeIncidents;
        value: any;
      }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    AddBranch: (state, action: PayloadAction<Sucursale>) => {
      const branch = action.payload;
      state.branch = branch.razon_social;
      state.branch_id = branch.id_sucursal;
    },
    Searching: (state, action: PayloadAction<Incidencia[]>) => {
      const incidents_show = action.payload;
      state.show_incidents = incidents_show;
    },
    LoadPresentation: (state, action: PayloadAction<Boolean>) => {
      const isLoad = action.payload;
      if (isLoad) {
        state.load = true;
      } else {
        state.load = false;
      }
    },
    ResetState: (state) => {
      state.company = "";
      state.business_name = "";
      state.branch = "";
      state.branch_id = 0;
      state.contact_name = "";
      state.contact_dni = "";
      state.contact_number = "";
      state.contact_email = "";
      state.contact_post = "";
      state.station_type = "";
      state.priority = 0;
      state.level = 0;
      state.id_subcategory = 0;
      state.cod_subcategory = "";
      state.subcategory = "";
      state.date = new Date().toISOString().substring(0, 10);
      state.hour = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncidents.pending, (state) => {
        state.load = true;
      })
      .addCase(fetchIncidents.fulfilled, (state, actions) => {
        const { data } = actions.payload;

        const incidencias: Incidencia[] = data.data;
        incidencias?.map((incidencia) => {
          incidencia.nombre_empresa = incidencia.empresa.razon_social;
          incidencia.nombre_contacto =
            incidencia.contacto.nombres.toUpperCase();
          incidencia.fecha_informe = new Date(incidencia.fecha_informe)
            .toISOString()
            .substring(0, 10);
          incidencia.informe = `${incidencia.sub_categorias.categorias.categoria} - ${incidencia.sub_categorias.sub_categoria}`;
          incidencia.tecnico = incidencia.usuarios.nombres;
        });

        state.incidents = incidencias;
        state.show_incidents = incidencias;
        state.companies = data.empresas;
        state.types_contacts = data.cargos_contactos;
        state.categories = data.categorias;
        state.contacts = data.contactos;

        state.load = false;
      })
      .addCase(fetchIncidents.rejected, (state, actions) => {
        console.log("error");
        console.log(actions.payload);
        state.load = false;
        state.error = true;
      });
  },
});

export const {
  ChangeIssueView,
  ChangeViewDetail,
  AddCompany,
  AddContact,
  AddSubCategories,
  ChangeIncidents,
  AddBranch,
  AddSubCategorie,
  ResetState,
  Searching,
  LoadPresentation,
} = Incidents.actions;

export default Incidents.reducer;
