```
// data model

account {
  id: string,
  name: string
}

user {
  id: string,
  accountId: string,
  name: string,
  type: enum['parent', 'child']
}

category {
  id: string.
  accountId: string,
  name: string
}

budget {
  id: string.
  accountId: string,
  userId: string,
  name: string?,
  centAmount: number,
  categoryId: string,
  timeframe: enum['weekly', 'monthly'],
  dateCreated: number
}

expense {
  id: string,
  budgetId: string,
  userId: string,
  centAmount: number,
  approved: boolean?,
  date: number
}

// reducer action types

const ACCOUNT_CREATED = 'ACCOUNT_CREATED';
/*
  payload {
    accountId: string,
    name: string
  }
*/

const ACCOUNT_SIGNIN = 'ACCOUNT_SIGNIN';
/*
  payload {
    accountId: string
  }
*/

const ACCOUNT_SIGNOUT = 'ACCOUNT_SIGNOUT';
/*
  payload {
    accountId: string
  }
*/

const USER_CREATED = 'USER_CREATED';
/*
  payload {
    userId: string,
    accountId: string,
    name: string,
    type: enum['parent', 'child']
  }
*/

const USER_SIGNIN = 'USER_SIGNIN';
/*
  payload {
    userId: string
  }
*/

const USER_SIGNOUT = 'USER_SIGNOUT';
/*
  payload {
    userId: string
  }
*/

const CATEGORY_CREATED = 'CATEGORY_CREATED';
/*
  payload {
    id: string,
    accountId: string,
    name: string
  }
*/

const CATEGORY_CHANGED = 'CATEGORY_CHANGED';
/*
  payload {
    id: string,
    name: string
  }
*/

const BUDGET_CREATED = 'BUDGET_CREATED';
/*
  payload {
    id: string.
    accountId: string,
    userId: string,
    name: string?,
    centAmount: number,
    categoryId: string?,
    timeframe: enum['weekly', 'monthly'],
    startDate: number
  }
*/

const BUDGET_CHANGED = 'BUDGET_CHANGED';
/*
  payload {
    id: string.
    userId: string,
    name: string?,
    centAmount: number,
    categoryId: string?,
    timeframe: enum['weekly', 'monthly'],
    startDate: number
  }
*/

const EXPENSE_CREATED = 'EXPENSE_CREATED';
/*
  payload {
    id: string,
    budgetId: string.
    userId: string,
    centAmount: number,
    approved: boolean?
    date: number
  }
*/

const EXPENSE_CHANGED = 'EXPENSE_CHANGED';
/*
  payload {
    id: string,
    userId: string,
    centAmount: number,
    approved: boolean?,
    date: number
  }
*/
```
