import { useRef, useState } from 'react'
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }
  const submissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true)
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
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched
  const nameInputClasses = nameInputIsValid ? 'form-control invalid ' : 'form-control'
  return (
    <form onSubmit={submissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} value={enteredName} />
        {nameInputIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
