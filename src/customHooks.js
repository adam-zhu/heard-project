import { useCallback, useReducer } from 'react';
import { useLocalStorage } from 'react-use';

const LOCAL_STORAGE_KEY = '@@@@_Heard_Onsite_Project-Adam_Zhu';

export const usePersistReducer = (reducer, initialState) => {
  const [savedState, saveState] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    initialState,
  );
  const reducerLocalStorage = useCallback(
    (state, action) => {
      const newState = reducer(state, action);

      saveState(newState);

      return newState;
    },
    [reducer, saveState],
  );

  return useReducer(reducerLocalStorage, savedState);
};
