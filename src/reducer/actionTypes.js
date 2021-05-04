export const ACCOUNT_CREATED = 'ACCOUNT_CREATED';
/*
  payload {
    accountId: string,
    name: string
  }
*/

export const ACCOUNT_SIGNIN = 'ACCOUNT_SIGNIN';
/*
  payload {
    accountId: string
  }
*/

export const ACCOUNT_SIGNOUT = 'ACCOUNT_SIGNOUT';
/*
  payload {
    accountId: string
  }
*/

export const USER_CREATED = 'USER_CREATED';
/*
  payload {
    userId: string,
    accountId: string,
    name: string,
    type: enum['parent', 'child']
  }
*/

export const USER_SIGNIN = 'USER_SIGNIN';
/*
  payload {
    userId: string
  }
*/

export const USER_SIGNOUT = 'USER_SIGNOUT';
/*
  payload {
    userId: string
  }
*/

export const CATEGORY_CREATED = 'CATEGORY_CREATED';
/*
  payload {
    id: string,
    accountId: string,
    name: string
  }
*/

export const CATEGORY_CHANGED = 'CATEGORY_CHANGED';
/*
  payload {
    id: string,
    name: string
  }
*/

export const BUDGET_CREATED = 'BUDGET_CREATED';
/*
  payload {
    id: string.
    accountId: string,
    userId: string,
    name: string?,
    centAmount: number,
    categoryId: string?,
    timeframe: enum['weekly', 'monthly']
  }
*/

export const BUDGET_CHANGED = 'BUDGET_CHANGED';
/*
  payload {
    id: string.
    userId: string,
    name: string?,
    centAmount: number,
    categoryId: string?,
    timeframe: enum['weekly', 'monthly']
  }
*/

export const EXPENSE_CREATED = 'EXPENSE_CREATED';
/*
  payload {
    id: string,
    budgetId: string.
    userId: string,
    centAmount: number,
    approved: boolean?
  }
*/

export const EXPENSE_CHANGED = 'EXPENSE_CHANGED';
/*
  payload {
    id: string,
    userId: string,
    centAmount: number,
    approved: boolean?
  }
*/
