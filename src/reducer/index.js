import {
  ACCOUNT_CREATED,
  ACCOUNT_SIGNIN,
  ACCOUNT_SIGNOUT,
  USER_CREATED,
  USER_SIGNIN,
  USER_SIGNOUT,
  CATEGORY_CREATED,
  CATEGORY_CHANGED,
  BUDGET_CREATED,
  BUDGET_CHANGED,
  EXPENSE_CREATED,
  EXPENSE_CHANGED,
} from './actionTypes';

export const INITIAL_STATE = {
  accounts: [],
  users: [],
  categories: [],
  budgets: [],
  expenses: [],
  currentAccount: undefined,
  currentUser: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_CREATED:
      return {
        ...state,
        accounts: state.accounts.concat([action.payload]),
      };

    case ACCOUNT_SIGNIN:
      return {
        ...state,
        currentAccount: action.payload,
      };

    case ACCOUNT_SIGNOUT:
      return {
        ...state,
        currentAccount: undefined,
      };

    case USER_CREATED:
      return {
        ...state,
        users: state.users.concat([action.payload]),
      };

    case USER_SIGNIN:
      return {
        ...state,
        currentUser: action.payload,
      };

    case USER_SIGNOUT:
      return {
        ...state,
        currentUser: undefined,
      };

    case CATEGORY_CREATED:
      return {
        ...state,
        categories: state.categories.concat([action.payload]),
      };

    case CATEGORY_CHANGED:
      return {
        ...state,
        categories: state.categories.map((c) =>
          c.id === action.payload.id ? action.payload : c,
        ),
      };

    case BUDGET_CREATED:
      return {
        ...state,
        budgets: state.budgets.concat([action.payload]),
      };

    case BUDGET_CHANGED:
      return {
        ...state,
        budgets: state.budgets.map((b) =>
          b.id === action.payload.id ? action.payload : b,
        ),
      };

    case EXPENSE_CREATED:
      return {
        ...state,
        expenses: state.expenses.concat([action.payload]),
      };

    case EXPENSE_CHANGED:
      return {
        ...state,
        expenses: state.expenses.map((e) =>
          e.id === action.payload.id ? action.payload : e,
        ),
      };

    default:
      return state;
  }
};

export default reducer;
