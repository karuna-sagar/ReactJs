import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Image() {
  return (
    <img src="images/focaccia.jpg" alt="focaccia" />
  )
}
function Intro() {
  return (
    <div>
      <h1> Sagar Singh </h1>
      <p>
        I'm a straightforward, kind, and self-assured guy. My father is a
        well-known physician who understands how to embrace his work with ardor
        and commitment.
      </p>
    </div>
  )
}

function SkillList() {

}
function App() {
  return (
    <div className="card">
      <Image />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


