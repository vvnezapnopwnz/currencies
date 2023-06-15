import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
export interface IDirection {
  code: string;
  name: string;
}

const initialState: {
  activeDirection: string;
  directionsList: IDirection[];
} = {
  activeDirection: "BTC",
  directionsList: [
    {
      code: "BTC",
      name: "Bitcoin BTC ",
    },
    {
      code: "ETH",
      name: "Ethereum ETH ",
    },
    {
      code: "CASHUSD",
      name: "Наличные USD ",
    },
    {
      code: "CASHRUB",
      name: "Наличные RUB ",
    },
    {
      code: "ACRUB",
      name: "Альфа-банк RUB ",
    },
    {
      code: "SBERRUB",
      name: "Сбербанк RUB ",
    },
    {
      code: "TCSBRUB",
      name: "Тинькофф RUB ",
    },
    {
      code: "USDTTRC",
      name: "Tether TRC20 USDT ",
    },
  ],
};

export const directionSlice = createSlice({
  name: "directions",
  initialState,
  reducers: {
    setActiveDirection: (state, action: PayloadAction<string>) => {
      state.activeDirection = action.payload;
    },
  },
});
export const { setActiveDirection } = directionSlice.actions;
export const directionSelector = (state: RootState) => state.directionReducer;
export default directionSlice.reducer;
