import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];
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
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        // <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>
        {skill.level === "beginner" ? "👶" : ""}
        {skill.level === "intermediate" ? "👍" : ""}
        {skill.level === "advanced" ? "💪" : ""}
      </span>
    </div>
  )
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


