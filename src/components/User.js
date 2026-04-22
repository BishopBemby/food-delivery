import { useState, useEffect } from "react";
//functional component
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count22, setCount22] = useState(0);

  useEffect(() => {}, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <button onClick={() => setCount22(count22 + 1)}>
        Clicked {count22} times
      </button>
      <h1>{name}</h1>
      <p>This is the user profile page.</p>
      <p>{name} is a software developer.</p>
    </>
  );
};

export default User;
