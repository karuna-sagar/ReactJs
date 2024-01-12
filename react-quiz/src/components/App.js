

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";

export default function App() {
  const initialState = {
    questions: [],
    // 'Loading' ,'ready','error' ,'active','finished'
    status: 'loading',
  }
  const [{ question, status }, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    console.log(state)
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: 'ready' }
      case "dataFailed":
        return { ...state, status: 'error' }
      default:
        throw new Error('Unknown action')
    }
  }
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: "dataReceived", payload: data }))
      .catch(err => dispatch({ type: "dataFailed" }))
  }, [])

  return (
    <div className="app">
      <Header />

      <Main className="main">
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
      </Main>
    </div>
  );
}
