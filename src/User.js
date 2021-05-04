import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Budgets from './Budgets';
import { StateContext, DispatchContext } from './contexts';
import { USER_CREATED, USER_SIGNIN, USER_SIGNOUT } from './reducer/actionTypes';
import { USER_TYPES } from './constants';

const User = () => {
  const state = useContext(StateContext);
  const { currentUser } = state;

  return (
    <div className='user-container'>
      {currentUser ? (
        <>
          <UserSignout />
          <Budgets />
        </>
      ) : (
        <UserInterface />
      )}
    </div>
  );
};

const UserInterface = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { users, currentAccount } = state;
  const accountId = currentAccount.id;
  const accountUsers = users.filter((u) => u.accountId === accountId);
  const onUserCreate = ({ name, type }) => {
    if (!name) {
      return alert('Please ensure all fields are completed.');
    }

    const id = uuidv4();

    dispatch({
      type: USER_CREATED,
      payload: {
        id,
        accountId,
        name,
        type,
      },
    });
  };
  const onUserSelect = (user) => (e) => {
    dispatch({
      type: USER_SIGNIN,
      payload: user,
    });
  };

  return (
    <div className='users-list-container'>
      <h2 className='title'>Select your user:</h2>
      <CreateNew onFormSubmit={onUserCreate} />
      {accountUsers.length ? (
        <ul className='users-list'>
          {accountUsers.map((u) => (
            <UserItem key={u.id} user={u} onSelect={onUserSelect} />
          ))}
        </ul>
      ) : (
        <p>No users created.</p>
      )}
    </div>
  );
};

const CreateNew = ({ onFormSubmit }) => {
  const [nameValue, setNameValue] = useState('');
  const [typeValue, setTypeValue] = useState(USER_TYPES[0]);
  const onNameChange = (e) => {
    const { value } = e.target;

    setNameValue(value);
  };
  const onTypeChange = (e) => {
    const { value } = e.target;

    setTypeValue(value);
  };
  const onSubmit = (e) => {
    onFormSubmit({ name: nameValue, type: typeValue });
    setNameValue('');
    setTypeValue(USER_TYPES[0]);
  };

  return (
    <form className='create-new' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={nameValue}
        onChange={onNameChange}
        required
      />
      {USER_TYPES.map((t) => (
        <label>
          <input
            key={t}
            type='radio'
            value={t}
            checked={t === typeValue}
            onChange={onTypeChange}
          />
          {t}
        </label>
      ))}
      <button type='submit'>Create</button>
    </form>
  );
};

const UserItem = ({ user, onSelect }) => {
  const { name } = user;

  return (
    <li className='users-list-item'>
      {name} <button onClick={onSelect(user)}>Select</button>
    </li>
  );
};

const UserSignout = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { currentUser } = state;
  const onUserSignout = (e) => {
    dispatch({ type: USER_SIGNOUT });
  };

  return (
    <div className='current-account-container'>
      <h2>Current user: {currentUser.name}</h2>
      <button onClick={onUserSignout}>Sign Out from {currentUser.name}</button>
    </div>
  );
};

export default User;
