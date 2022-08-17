import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./slice/counter";

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
})

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;