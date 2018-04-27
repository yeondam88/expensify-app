import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import { removeExpense } from "../actions/expenses";

class ExpenseList extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
        </div>

        {this.props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          this.props.expenses.map(expense => {
            return (
              <ExpenseListItem
                key={expense.id}
                {...expense}
                remove={this.props.remove}
              />
            );
          })
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
