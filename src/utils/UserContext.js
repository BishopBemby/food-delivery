import React, { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;

/** Don't use context all the time. Use only when we need to pass data from a child component to a parent component, and then passing that data to another child component. */
