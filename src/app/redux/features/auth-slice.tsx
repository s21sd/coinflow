import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface user {
    uid: string;
    photoURL: string | null;
    displayName: string | null;
    email: string | null;
}
interface User {
    isAuth: boolean;
    user: user
}

interface AuthState {
    isAuth: boolean;
    user: User | null;
    secretkeys: string;
}

const initialState: AuthState = {
    isAuth: false,
    user: null,
    secretkeys: ''
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<User>) => {
            state.isAuth = true;
            state.user = action.payload;
        },
        logOut: (state) => {
            state.isAuth = false;
            state.user = null;
        },
        setSecretKeys: (state, action: PayloadAction<string>) => {
            state.secretkeys = action.payload;
        }
    }
});

export const { logIn, logOut, setSecretKeys } = auth.actions;
export default auth.reducer;
