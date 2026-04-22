import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  
  const [btnName, setBtnName] = useState("Login");
  console.log(btnName);
  //in above once setBtnName is called, the component re-renders and the new value of btnName is reflected in the UI. This is because useState is a hook that allows us to manage state in a functional component, and when we update the state using the setter function (setBtnName), it triggers a re-render of the component - navItems component, and the UI is updated with the new state value.
  const loginHandler = () => {
    if (btnName === "Login") { 
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  //To link routes, never use anchor tags like <a href="/about">About</a> because it will cause a full page reload and the state of the application will be lost. Instead, use the Link component provided by react-router-dom to link routes without causing a full page reload. The Link component is used to create links that navigate to different routes in the application without causing a full page reload. It takes a "to" prop which specifies the path to navigate to when the link is clicked. For example, <Link to="/about">About</Link> will navigate to the "/about" route when clicked without causing a full page reload.
  return (
    <div className="nav-items">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <button className="login-btn" onClick={loginHandler}>
          {btnName}
        </button>
      </ul>
      
    </div>
  );
};

export default NavItems;