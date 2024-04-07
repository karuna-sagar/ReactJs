import { useRef, useState } from 'react'
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('')
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }
  const submissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)
    setEnteredName('');
    nameInputRef.current.value = '';
  }
  return (
    <form onSubmit={submissionHandler} >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
