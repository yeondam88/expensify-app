import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import { removeExpense } from "../actions/expenses";

class ExpenseList extends Component {
  render() {
    return (
      <div>
        <h1>Expense List</h1>
        {this.props.expenses.length ? (
          this.props.expenses.map(expense => {
            return (
              <ExpenseListItem
                key={expense.id}
                {...expense}
                remove={this.props.remove}
              />
            );
          })
        ) : (
          <p>No expenses..</p>
        )}
      </div>
    );
  }
}

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
