import { useLocalStorage } from "src/hooks";
import { RootState } from "src/store";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    profile?: Profile;
    loading?: boolean;
    error?: string;
}

const initialState: AuthState = {
    profile: undefined,
    loading: undefined,
    error: undefined,
};

export const authSlice = createSlice({
    name: "authApi",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const profile = action.payload as Profile;
            state.profile = profile;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useLocalStorage<Profile>("profile").setItem(action.payload);
        },
        logOut: (state) => {
            state.profile = undefined;
        },
    },
});

export const authSelector = (state: RootState) => state.auth
export const { setCredentials, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

