import { Action } from "@fullcalendar/core/internal";
import { createSlice } from "@reduxjs/toolkit";
export const TechnicalVisits = createSlice({
  name: "incidents_resolve",
  initialState: {
    visits: [],
    technical: ["JUAN RODRIGUEZ VARGAS", "JOSE ALBERTO CABANILLAS RAMOS,"],
    start_time: "11:13:34",
    end_time: "12:29:13",
    date_of_service: "18-05-2023",
    number_of_order: "2023-VT00824",
    bussines_name: "COESTI S.A.",
    branch: "E/S IGARZA",
    contact: "-",
    phone: "123456789",
    ups: false,
    ups_observation: "",
    ups_battery: false,
    usp_battery_observation: "",
    power_outlet_ups: false,
    power_outlet_ups_observation: "",
    stabilizer: false,
    stabilizer_observation: "",
    power_output: false,
    power_output_observation: "",
    energy_input: false,
    energy_input_observation: "",
    interface: false,
    interfaace_observation: "",
    monitor: false,
    monitor_observation: "",
    multiport_card: false,
    multiport_card_observation: "",
    os: false,
    os_observation: "",
    antivirus_expiration: false,
    antivirus_expiration_observation: "",
    hard_drive: false,
    hard_drive_observation: "",
    backup: false,
    backup_observation: "",
    ComplementaryReviews: [
      {
        id: 1,
        id_complementary_reviews: 1,
        printers: false,
        printers_observation: "",
        reader_network: false,
        reader_network_observation: "",
        jack_tools: false,
        jack_tools_observation: "",
        hose_voltage: false,
        hose_voltage_observation: "",
        reader_protector_rubber: false,
        reader_protector_rubber_observation: "",
        pos_cabinet: false,
        pos_cabinet_observation: "",
        mr_450_dti_terminal: false,
        mr_450_dti_terminal_observation: "",
      },
    ],
    id_complementary_reviews: 2,
    load: false,
    error: false,
  },
  reducers: {
    AddComplementaryReviews: (state) => {
      state.ComplementaryReviews.push({
        id: 2,
        id_complementary_reviews: state.id_complementary_reviews++,
        printers: false,
        printers_observation: "",
        reader_network: false,
        reader_network_observation: "",
        jack_tools: false,
        jack_tools_observation: "",
        hose_voltage: false,
        hose_voltage_observation: "",
        reader_protector_rubber: false,
        reader_protector_rubber_observation: "",
        pos_cabinet: false,
        pos_cabinet_observation: "",
        mr_450_dti_terminal: false,
        mr_450_dti_terminal_observation: "",
      });
    },
    DeleteComplementaryReviews: (state) => {
      if (state.ComplementaryReviews.length > 1) {
        state.ComplementaryReviews.pop();
        state.id_complementary_reviews--;
      }
    },
  },
});

export const { AddComplementaryReviews, DeleteComplementaryReviews } =
  TechnicalVisits.actions;

export default TechnicalVisits.reducer;
