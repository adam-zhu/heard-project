import React from 'react';
import './App.css';
import Account from './Account';
import { usePersistReducer } from './customHooks';
import reducer, { INITIAL_STATE } from './reducer';
import { StateContext, DispatchContext } from './contexts';

const App = () => {
  const [state, dispatch] = usePersistReducer(reducer, INITIAL_STATE);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className='app-container'>
          <h1 className='app-title'>
            Welcome to the Heard Family Expenses Tracker
          </h1>
          <Account />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
