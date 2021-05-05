- started off by reading the product specs and modelling out the data, then created a REST API esque set of structured interactions and started building frontend against that
  - currently data is just persisted to localStorage and there is no separate API/db entity, just a client bundle
- login features are faked out
- factored everything primarily according to getting as many features built as quickly as possible
  - if I had more time I'd've done a better job with creating constructs to manage the user and account contexts and to manage data in a more efficient and maintainable manner
    - would have atomic state management pairing with each data element rather than just one fatty reducer
- did budget timeframes as just interval from whenever budget was made rather than an interval that'd lock to atomic weeks/months
- left to do:
  - expense approval
  - edit expense, edit budget
  - features regarding parents managing children's budgets
  - real login
  - real data persistence
  - styling

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
// this is kind of like a REST api I guess?

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
