const initialItems = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
  }
}
