import { createStore, combineReducers } from "redux";

// Expense Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const demoState = {
  expenses: [
    {
      id: "1231231",
      description: "March Rent",
      note: "This is rent for March 2018",
      amount: 209400,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
