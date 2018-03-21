import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import * as expenses from "./actions/expenses";
import * as filters from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  expenses.addExpense({ description: "water bill", amount: 1200 })
);
store.dispatch(
  expenses.addExpense({ description: "utilities bill", amount: 300 })
);

store.dispatch(filters.setTextFilter("bill"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
