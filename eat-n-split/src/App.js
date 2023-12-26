import { useState } from 'react'
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>{children}</button>
  )
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleAddFriend() {
    setShowAddFriend(show => !show)
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleAddFriend} >{showAddFriend ? 'Close' : ' Add Friend'}</Button>

      </div>
      <FormSplitBill />
    </div>
  )
}

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map(friend => <Friend friend={friend} key={friend.id} />)}
    </ul>
  )
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.id} />
      <h3>{friend.name} </h3>
      {friend.balance < 0 &&
        <p className="red">You owe {friend.name} ${Math.abs(friend.balance)} </p>
      }
      {friend.balance > 0 &&
        <p className="green">{friend.name} owes you ${Math.abs(friend.balance)} </p>
      }
      {friend.balance === 0 &&
        <p >You and  {friend.name} are even ${Math.abs(friend.balance)} </p>
      }
      <Button>Select</Button>

    </li>
  )
}


function FormAddFriend() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48")
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) {
      return;
    }
    const id = crypto.randomUUID()
    const newFriend = {
      id,
      name,
      image: `${image}?= ${id}`,
      balance: 0,
    }
    setImage("https://i.pravatar.cc/48");
    setName("")
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Friend Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>🌎IMAGE URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split bill with X</h2>
      <label>💰 Bill Value</label>
      <input type="text" />
      <label>🕴 Your Expense</label>
      <input type="text" />
      <label>🕺X's Expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying the bill </label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}