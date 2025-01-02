import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlices"; // Đảm bảo accountSlices được import đúng

interface Account {

}

interface RootState {
  account: Account | null; 
}

// Middleware để lưu trữ trạng thái vào localStorage
const localStorageMiddleware = (store: { getState: () => RootState }) => (next: (action: any) => any) => (action: any) => {
  const result = next(action);
  // Lưu vào localStorage
  const state = store.getState();
  localStorage.setItem("oop_account", JSON.stringify(state.account));
  return result;
};

// Hàm khôi phục store từ localStorage
const reHydrateStore = () => {
  const savedAccount = localStorage.getItem("oop_account");
  return {
    account: savedAccount ? JSON.parse(savedAccount) : null,
  };
};

// Cấu hình Redux store
export const store = configureStore({
  reducer: {
    account: accountReducer,  
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type { RootState };
