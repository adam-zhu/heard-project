import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import User from './User';
import { StateContext, DispatchContext } from './contexts';
import {
  ACCOUNT_CREATED,
  ACCOUNT_SIGNIN,
  ACCOUNT_SIGNOUT,
} from './reducer/actionTypes';

const Account = () => {
  const state = useContext(StateContext);
  const { currentAccount } = state;

  return (
    <div className='account-container'>
      {currentAccount ? (
        <>
          <AccountSignout />
          <User />
        </>
      ) : (
        <AccountInterface />
      )}
    </div>
  );
};

const AccountInterface = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { accounts } = state;
  const onAccountCreate = (name) => {
    if (!name) {
      return alert('Please ensure all fields are completed.');
    }

    const id = uuidv4();

    dispatch({
      type: ACCOUNT_CREATED,
      payload: {
        id,
        name,
      },
    });
  };
  const onAccountSelect = (account) => {
    dispatch({
      type: ACCOUNT_SIGNIN,
      payload: account,
    });
  };

  return (
    <div className='accounts-list-container'>
      <h2 className='title'>Select your account:</h2>
      <CreateNew onFormSubmit={onAccountCreate} />
      {accounts.length ? (
        <ul className='accounts-list'>
          {accounts.map((a) => (
            <AccountItem key={a.id} account={a} onSelect={onAccountSelect} />
          ))}
        </ul>
      ) : (
        <p>No accounts created.</p>
      )}
    </div>
  );
};

const CreateNew = ({ onFormSubmit }) => {
  const [nameValue, setNameValue] = useState('');
  const onNameChange = (e) => {
    const { value } = e.target;

    setNameValue(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(nameValue);
    setNameValue('');
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
      <button type='submit'>Create</button>
    </form>
  );
};

const AccountItem = ({ account, onSelect }) => {
  const { name } = account;
  const onButtonClick = (e) => {
    onSelect(account);
  };

  return (
    <li className='accounts-list-item'>
      {name} <button onClick={onButtonClick}>Select</button>
    </li>
  );
};

const AccountSignout = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { currentAccount } = state;
  const onAccountSignout = (e) => {
    dispatch({ type: ACCOUNT_SIGNOUT });
  };

  return (
    <div className='current-account-container'>
      <h2>Current account: {currentAccount.name}</h2>
      <button onClick={onAccountSignout}>
        Sign Out from {currentAccount.name}
      </button>
    </div>
  );
};

export default Account;
