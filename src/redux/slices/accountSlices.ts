import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho tài khoản
interface Account {
  id: string;
  username: string;
  email: string;
  [key: string]: any; // Thêm các thuộc tính khác nếu cần
}

// Trạng thái ban đầu
const initialState: Account = {
  id: '',
  username: '',
  email: ''
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Account>) => {
      return action.payload; // Gán tài khoản mới khi login
    },
    logout: (state) => {
      state.id = '';
      state.username = '';
      state.email = '';
    }, // Đặt trạng thái về trạng thái ban đầu khi logout
  },
});

// Reducer
const accountReducer = accountSlice.reducer;
// Actions
const accountActions = accountSlice.actions;

export default accountReducer;
export { accountActions };
