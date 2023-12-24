import { useState } from 'react'
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];


export default function App() {
  const [items, setItems] = useState([]);
  function handleSetItem(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id))
  }
  function handleToggleItem(id) {

    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))

  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleSetItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1);



  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description: description, quantity: quantity, packed: false, id: Date.now() }

    console.log(newItem)
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What Do You need for Your 🤩 Trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) =>
          <option value={num} key={num}>
            {num}
          </option>
        )}
      </select>
      <input type="text" placeholder="Item.." value={description} onChange={e =>
        setDescription(e.target.value)
      } />
      <button>Add</button>
    </form>
  )
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (<Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />))}
      </ul>
    </div>
  )
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your List,and you already packed X (X%)</em>
    </footer>
  )
}