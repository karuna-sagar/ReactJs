

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  const initialState = {
    questions: [],
    // 'Loading' ,'ready','error' ,'active','finished'
    status: 'loading',
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    console.log(state)
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: 'ready' }
      default:
        throw new Error('Unknown action')
    }
  }
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: "dataReceived", payload: data }))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="app">
      <Header />

      <Main className="main">
        <p>1/15questions</p>
      </Main>
    </div>
  );
}
