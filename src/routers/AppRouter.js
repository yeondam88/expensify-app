import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import {
  Header,
  AddExpensePage,
  EditExpensePage,
  ExpenseDashboardPage,
  HelpPage,
  NotFoundPage
} from "../components";

const AppRouter = () => (
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

export default AppRouter;
