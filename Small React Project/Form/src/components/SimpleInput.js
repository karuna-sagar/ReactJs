import { useState } from 'react'
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }
  const submissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);
  }
  return (
    <form onSubmit={submissionHandler} >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
