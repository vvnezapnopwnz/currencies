import { configureStore } from '@reduxjs/toolkit';
import directionReducer from '@/features/directions/directionsSlice';
import tabReducer from '@/features/tabs/tabsSlice';
import filterReducer from '@/features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    directionReducer,
    tabReducer,
    filterReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;