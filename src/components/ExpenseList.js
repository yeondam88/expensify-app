import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import { removeExpense } from "../actions/expenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length ? (
      props.expenses.map(expense => {
        return (
          <ExpenseListItem
            key={expense.id}
            {...expense}
            remove={props.remove}
          />
        );
      })
    ) : (
      <p>No expenses..</p>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: () => {
      return dispatch(removeExpense(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
