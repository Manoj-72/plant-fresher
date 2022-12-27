import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../config/axiosInstance";

export const signUpUser = createAsyncThunk("signupuser", async (user) => {
  try {
    const response = await axiosInstance("User/AddUser", {
      method: "POST",
      data: user,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    const signupError = error?.response?.data ?? "Unknown error";
    throw new Error(signupError);
  }
});

export const loginUser = createAsyncThunk("loginuser", async (user) => {
  try {
    const response = await axiosInstance("/login", {
      method: "POST",
      data: user,
    });

    return response.data;
  } catch (error) {
    const loginError = error?.response?.data?.error ?? "Unknown error";
    throw new Error(loginError);
  }
});

export const authSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    loginErr: "",
    signupErr: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.signupErr = action.payload;
    });

    builder.addCase(signUpUser.pending, (state, action) => {});

    builder.addCase(signUpUser.rejected, (state, action) => {});

    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      localStorage.getItem("currentUser", JSON.stringify(action.payload));
      state.userInfo = action.payload;
    });

    builder.addCase(loginUser.pending, (state, action) => {});

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginErr = action.error.message;
    });
  },
});


export default authSlice;