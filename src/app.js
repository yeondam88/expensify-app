import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => <div>This is from my expense component</div>;

const EditExpensePage = () => <div>This is from my Edit page</div>;

const HelpPage = () => <div>This is from my Help page</div>;

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="is-active">
          Go Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Create
        </NavLink>
      </li>
      <li>
        <NavLink to="/edit" activeClassName="is-active">
          Edit
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </li>
    </ul>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
