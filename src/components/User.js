import { useState, useEffect } from "react";
//functional component
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count22, setCount22] = useState(0);
  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    // this.fetchUsers()
  }, []);

  const fetchUsers = async () => {
    // const data = await fetch("https://api.cors.lol/?url=ttps://api.github.com/users/BishopBemby");
    // const json = await data?.json();
    // console.log(
    //   json
    // );
    // setResInfo(json);
  };

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

/**
 * Lifecycle of a component in React:
 * 1. Mounting: When a component is being inserted into the DOM. The methods that are called during this phase are:
 *    - constructor
 *    - componentDidMount
 * 2. Updating: When a component is being re-rendered. The methods that are called during this phase are:
 * - getDerivedStateFromProps
 *   - shouldComponentUpdate
 *    - render
 *
 *    - componentDidUpdate  
 * 3. Unmounting: When a component is being removed from the DOM. The method that is called during this phase is:
 *    - componentWillUnmount
 */


/**
 * componentDidMount is not equal to useEffect with empty dependency array. The componentDidMount lifecycle method is called only once in the lifecycle of a component, after the component is mounted on the DOM. It is used to perform any side effects or data fetching after the component is rendered on the screen. On the other hand, useEffect with an empty dependency array is called every time the component is rendered on the screen, including the initial render. This means that if you use useEffect with an empty dependency array, it will be called every time the component is re-rendered, which can lead to performance issues if you are performing expensive operations inside the useEffect. Therefore, it is important to understand the difference between componentDidMount and useEffect with an empty dependency array and use them appropriately in your React components.
 */

/**
 * In useEffect, if you want to run the effect only once when the component is mounted, you can pass an empty dependency array as the second argument to the useEffect hook. This will ensure that the effect is only run once when the component is first rendered on the screen. However, if you want to run the effect every time the component is re-rendered, you can omit the second argument or pass a dependency array with values that will trigger the effect to run when they change. It is important to understand how the dependency array works in useEffect and use it appropriately to avoid performance issues in your React components. 
 * In class based components, this is achieved via componentDidUpdate.
 * Eg:
 *   componentDidUpdate(prevProps, prevState) {
 *     if (prevState.count !== this.state.count) {
 *        Perform some action when the count state changes
 *        This is very painful as we need to introduce a lot of conditions to check if the state has changed or not. This can lead to bugs if we forget to add a condition for a state variable. In functional components, this is achieved via useEffect hook with the dependency array. We can simply pass the state variable in the dependency array and the effect will only run when that state variable changes. This makes it much easier to manage side effects in functional components compared to class based components.
 *     }
 *   }
 */

/**
 * In class based components, we have lifecycle methods like componentDidMount, componentDidUpdate and componentWillUnmount to manage side effects and perform actions at different stages of the component's lifecycle. In functional components, we can achieve the same functionality using the useEffect hook. The useEffect hook allows us to perform side effects in functional components and can be used to mimic the behavior of lifecycle methods in class based components. For example, we can use useEffect with an empty dependency array to mimic the behavior of componentDidMount, and we can use useEffect with specific dependencies to mimic the behavior of componentDidUpdate. Additionally, we can return a cleanup function from useEffect to mimic the behavior of componentWillUnmount. Overall, the useEffect hook provides a powerful way to manage side effects in functional components and allows us to achieve similar functionality as class based components without the need for lifecycle methods.
 */

/**
 * Now can we use both class based components and functional components in the same application? Yes, we can use both class based components and functional components in the same application. React allows us to mix and match different types of components in our application, so we can choose to use class based components for certain parts of our application and functional components for other parts. This flexibility allows us to choose the best approach for each specific use case and makes it easier to manage our application's codebase. However, it is generally recommended to use functional components with hooks for new development, as they provide a more modern and concise way to manage state and side effects in React applications.
 */

/**
 * Now can we use 2 useEffect hooks in the same functional component? Yes, we can use multiple useEffect hooks in the same functional component. Each useEffect hook can be used to manage different side effects or perform different actions at different stages of the component's lifecycle. For example, we can have one useEffect hook that runs only once when the component is mounted, and another useEffect hook that runs every time a specific state variable changes. This allows us to organize our side effects and actions in a more modular way and makes it easier to manage our component's behavior. However, it is important to keep in mind that each useEffect hook will run independently, so we need to ensure that they do not interfere with each other and that they are properly organized to avoid confusion.
 * Eg:
 *   useEffect(() => {
 *     This effect runs only once when the component is mounted
 *   }, []);
 *
 *   useEffect(() => {
 *     This effect runs every time the count state changes
 *   }, [count]);
 */

/**
 * componentWillUnmount is a lifecycle method in class based components that is called just before a component is unmounted and destroyed. It is used to perform any necessary cleanup tasks, such as canceling network requests, clearing timers, or removing event listeners. This method is important for preventing memory leaks and ensuring that any resources used by the component are properly released when the component is no longer needed. In functional components, we can achieve similar functionality using the useEffect hook with a cleanup function that is returned from the effect. The cleanup function will be called when the component is unmounted, allowing us to perform any necessary cleanup tasks in a similar way to componentWillUnmount in class based components.
 * Eg:
 *  useEffect(() => {
 *    const interval = setInterval(() => {
 *      setCount((count) => count + 1);
 *    }, 1000);
 * above count will be updated every 1 second on screen even if we switch pages as i is mounted but not unmounted. To fix this, we can return a cleanup function from the useEffect hook that will clear the interval when the component is unmounted.
 *    return () => {
 *      clearInterval(interval);
 *    };
 *  }, []);
 * This way, when the component is unmounted, the interval will be cleared and the count will stop updating on the screen.
 */