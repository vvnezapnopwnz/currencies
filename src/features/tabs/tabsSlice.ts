import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
export interface ITab {
  [tabValue: string]: {
    name: string;
    currencies: string[];
  };
}
const initialState: {
  activeReceivingTab: string;
  activeSendingTab: string;
  tabs: ITab;
} = {
  activeReceivingTab: 'all',
  activeSendingTab: 'all',
  tabs: {
    all: {
      name: "Все",
      currencies: [],
    },
    crypto: {
      name: "Криптовалюты",
      currencies: ["BTC", "ETH", "USDTTRC"],
    },
    cash: {
      name: "Наличные",
      currencies: ["CASHUSD", "CASHRUB"],
    },
    banksRUB: {
      name: "Банки RUB",
      currencies: ["ACRUB", "SBERRUB", "TCSBRUB"],
    },
    banksUAH: {
      name: "Банки UAH",
      currencies: [],
    },
  },
};

export const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveReceivingTab: (state, action: PayloadAction<string>) => {
      state.activeReceivingTab = action.payload;
    },
    setActiveSendingTab: (state, action: PayloadAction<string>) => {
      state.activeSendingTab = action.payload;
    },
  },
});
export const { setActiveReceivingTab, setActiveSendingTab } = tabSlice.actions;
export const tabSelector = (state: RootState) => state.tabReducer;
export default tabSlice.reducer;
