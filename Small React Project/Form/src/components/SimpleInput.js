import { useRef, useState } from 'react'
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }
  const submissionHandler = event => {
    event.preventDefault();
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)
    setEnteredName('');
    // nameInputRef.current.value = '';  DONT ideal they manipulate  the DOM directly
  }
  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={submissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
