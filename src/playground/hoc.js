// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>This is private info. Please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="React HOC" />, document.getElementById("app"));
