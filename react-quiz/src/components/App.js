

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then(res => res.json())
      .then(data => console.log(data))
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
