import { autoBatchEnhancer, createSlice } from "@reduxjs/toolkit";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name:'account',
  initialState,
  reducers:{
    deposit(state,action){
      state.balance = state.balance + action.payload
    },
    withdraw(state,action){
      state.balance = state.balance - action.payload;
    },
    requestLoan(state,action){
      if(state.loan > 0) return 
      state.loan = 
    }
  }
})
