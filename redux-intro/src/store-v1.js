import { combineReducers, createStore } from "redux";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

store.dispatch(createCustomer("Karuna sagar", "12"));
store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(500, "buy a new car"));
store.dispatch(payLoan());
console.log(store.getState());
