import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StateContext, DispatchContext } from './contexts';
import {
  BUDGET_CREATED,
  CATEGORY_CREATED,
  EXPENSE_CREATED,
} from './reducer/actionTypes';
import { BUDGET_TIMEFRAMES } from './constants';

const centsToDollars = (centAmount) => {
  const dollarAmount = centAmount / 100;

  return `$${dollarAmount}`;
};

const Budgets = () => {
  const state = useContext(StateContext);
  const { budgets, currentAccount, currentUser } = state;
  const accountId = currentAccount.id;
  const userId = currentUser.id;
  const accountBudgets = budgets.filter((b) => b.accountId === accountId);
  const userBudgets = accountBudgets.filter((b) => b.userId === userId);
  const displayBudgets =
    currentUser.type === 'child' ? userBudgets : accountBudgets;

  return (
    <>
      <Categories />
      <div className='budgets-container'>
        <h2>Budgets</h2>
        <CreateBudget />
        {displayBudgets.length ? (
          <ul className='budgets-list'>
            {displayBudgets.map((b) => (
              <BudgetItem key={b.id} budget={b} />
            ))}
          </ul>
        ) : (
          <p>No budgets created.</p>
        )}
      </div>
      <CreateExpense />
    </>
  );
};

const Categories = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { categories, currentAccount } = state;
  const accountId = currentAccount.id;
  const accountCategories = categories.filter((c) => c.accountId === accountId);

  const [name, setName] = useState('');

  const onNameChange = (e) => {
    const { value } = e.target;

    setName(value);
  };
  const onSubmit = (e) => {
    const id = uuidv4();

    e.preventDefault();

    dispatch({
      type: CATEGORY_CREATED,
      payload: {
        id,
        accountId,
        name,
      },
    });
    setName('');
  };

  return (
    <div className='categories-container'>
      <h4>Budget Categories</h4>
      <form onSubmit={onSubmit}>
        <h4>Create New Budget Category</h4>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onNameChange}
        />
        <button type='submit'>Create New Category</button>
      </form>
      {accountCategories.length ? (
        <ul className='categories-list'>
          {accountCategories.map((c) => (
            <li key={c.id} classNme='category-item'>
              {c.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories.</p>
      )}
    </div>
  );
};

const CreateBudget = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { categories, currentAccount, currentUser } = state;
  const accountId = currentAccount.id;
  const userId = currentUser.id;
  const accountCategories = categories.filter((c) => c.accountId === accountId);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [categoryId, setCategoryId] = useState('');

  const onNameChange = (e) => {
    const { value } = e.target;

    setName(value);
  };
  const onAmountChange = (e) => {
    const { value } = e.target;

    setAmount(value);
  };
  const [timeframe, setTimeframe] = useState(BUDGET_TIMEFRAMES[0]);
  const onCategoryIdChange = (categoryId) => (e) => {
    setCategoryId(categoryId);
  };
  const onTimeframeChange = (e) => {
    const { value } = e.target;

    setTimeframe(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const centAmount = Number(amount) * 100;

    dispatch({
      type: BUDGET_CREATED,
      payload: {
        id,
        accountId,
        userId,
        name,
        centAmount,
        categoryId,
        timeframe,
        startDate: new Date().valueOf(),
      },
    });
    setName('');
    setCategoryId('');
    setAmount(0);
  };

  return (
    <form className='create-new' onSubmit={onSubmit}>
      <h4>Create New Budget</h4>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={onNameChange}
        required
      />
      <select name='category' required>
        {accountCategories.length ? (
          [{ id: '', name: 'select category' }, ...accountCategories].map(
            (c) => (
              <option
                value={c.id}
                onClick={onCategoryIdChange(c.id)}
                selected={categoryId === c.id}
              >
                {c.name}
              </option>
            ),
          )
        ) : (
          <option selected disabled>
            No categories.
          </option>
        )}
      </select>
      {BUDGET_TIMEFRAMES.map((t) => (
        <label>
          <input
            key={t}
            type='radio'
            value={t}
            checked={t === timeframe}
            onChange={onTimeframeChange}
          />
          {t}
        </label>
      ))}
      <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={onAmountChange}
        required
      />
      <button type='submit'>Create</button>
    </form>
  );
};

const BudgetItem = ({ budget }) => {
  const state = useContext(StateContext);
  const { expenses } = state;
  const { name, centAmount, startDate, timeframe } = budget;
  const budgetAmount = centsToDollars(centAmount);
  const budgetExpenses = expenses.filter((e) => e.budgetId === budget.id);
  const expenseAmount = centsToDollars(
    budgetExpenses.reduce((acc, e) => acc + e.centAmount, 0),
  );
  const isBudgetWithinTimeframe = (() => {
    const day = 1000 * 60 * 60 * 24;
    const increment = timeframe === 'monthly' ? 30 * day : 7 * day;
    const endDate = startDate + increment;
    const now = new Date().valueOf();

    return startDate <= now && now <= endDate;
  })();

  console.log(expenses);

  return (
    <li className='budget-item'>
      <strong className='budget-name'>{name}</strong>
      <br />
      {budget.timeframe} from {new Date(budget.startDate).toLocaleString()} (
      {isBudgetWithinTimeframe ? 'open' : 'closed'})
      <br />
      <span className='progress'>
        {expenseAmount} / <strong>{budgetAmount}</strong>
      </span>
      <ul className='expenses-list'>
        {budgetExpenses
          .sort((a, b) => a.date - b.date)
          .map((e) => (
            <ExpenseItem key={e.id} expense={e} />
          ))}
      </ul>
    </li>
  );
};

const ExpenseItem = ({ expense }) => {
  const { centAmount, date, approved } = expense;
  const amount = centsToDollars(centAmount);
  const approval =
    approved === true
      ? 'approved'
      : approved === false
      ? 'disapproved'
      : 'pending approval';

  return (
    <li className='expense-item'>
      {new Date(date).toLocaleString()} - {amount} ({approval})
    </li>
  );
};

const CreateExpense = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { budgets, currentAccount, currentUser } = state;
  const accountId = currentAccount.id;
  const userId = currentUser.id;
  const accountBudgets = budgets.filter((b) => b.accountId === accountId);
  const userBudgets = accountBudgets.filter((b) => b.userId === accountId);
  const displayBudgets =
    currentUser.type === 'parent' ? accountBudgets : userBudgets;

  const [amount, setAmount] = useState(0);
  const [budgetId, setBudgetId] = useState('');

  const onAmountChange = (e) => {
    const { value } = e.target;

    setAmount(value);
  };
  const onBudgetIdChange = (e) => {
    const { value } = e.target;

    setBudgetId(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ amount, budgetId });

    if (!amount || !budgetId) {
      return alert('Please ensure all fields are completed.');
    }

    const id = uuidv4();
    const centAmount = Number(amount) * 100;

    dispatch({
      type: EXPENSE_CREATED,
      payload: {
        id,
        userId,
        budgetId,
        centAmount,
        approved: undefined,
        date: new Date().valueOf(),
      },
    });
    setBudgetId('');
    setAmount(0);
  };

  return (
    <form className='create-new' onSubmit={onSubmit}>
      <h4>Create New Expense</h4>
      <select
        name='budget'
        onChange={onBudgetIdChange}
        value={budgetId}
        required
      >
        {displayBudgets.length ? (
          [{ id: '', name: 'select budget' }, ...displayBudgets].map((b) => (
            <option value={b.id}>{b.name}</option>
          ))
        ) : (
          <option selected disabled>
            No budgets.
          </option>
        )}
      </select>
      <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={onAmountChange}
        required
      />
      <button type='submit'>Create</button>
    </form>
  );
};

export default Budgets;
