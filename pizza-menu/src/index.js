import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>)
}
function Header() {
  return (
    <header className='header '>

      <h1>Fast React Pizza Co.</h1>
    </header>

  )
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;

  const numPizzas = pizzas.length
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <div className='pizzas'>

          {pizzaData.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </div>
      ) : <p>We're still working on Menu </p>}


    </main>
  )
}
function Footer() {
  const hour = new Date().getHours();
  console.log(hour)
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return <footer className='footer'>
    {isOpen ? (
      <Order closeHour={closeHour} />
    ) : <p>We're Happy to welcome between {openHour}:00 and {closeHour}:00</p>}
  </footer>

  function Order(props) {
    return (
      <div className='order'>
        <p>
          We're open until {props.closeHour}:00 come visit us or order online
        </p>
        <button className='btn'>Order</button>
      </div>)
  }

  // return <footer className='footer'>
  //   {isOpen && (
  //     <div className='order'>
  //       <p>
  //         We're open until {closeHour}:00 come visit us or order online
  //       </p>
  //       <button className='btn'>Order</button>
  //     </div>
  //   )}
  // </footer>
}

function Pizza({ pizza }) {
  return (
    <div className='pizza'>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span> {pizza.price} </span>
      </div>
    </div>
  )
}
// function Pizza(props) {
//   return (
//     <div className='pizza'>
//       <img src={props.photoName} alt={props.name} />
//       <div>
//         <h3>{props.name}</h3>
//         <p>{props.ingredients}</p>
//         <span> {props.price} </span>
//       </div>
//     </div>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

