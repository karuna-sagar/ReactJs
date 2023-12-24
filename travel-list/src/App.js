import { useState } from 'react'
import { Logo } from './Logo';
import { Form } from './Form';
import { PackingList } from './PackingList';
import { Stats } from './Stats';
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

  function handleClearItems() {
    const confirmed = window.confirm("Are You want to delete all items ?")
    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleSetItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} onClearList={handleClearItems} />
      <Stats items={items} />
    </div>
  )
}

