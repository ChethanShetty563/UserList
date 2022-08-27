import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUSer = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please Enter a valid name and age',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)',
      });
      return;
    }

    props.onUserAdd(name, age);
    setAge('');
    setName('');
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={name} onChange={nameChangeHandler} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={age} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUSer;
