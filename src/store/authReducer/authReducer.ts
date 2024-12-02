import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./authReducer.types";


const initialState: AuthState = {
    isAuthenticated: false,
    token: '',
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            state.isAuthenticated = true;
            state.token = payload.token;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = '';
        }
    }
});


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;