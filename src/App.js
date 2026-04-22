import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//Don't import them as named imports like import {Body} from "./components/Body"; because we are exporting them as default exports, if we import them as named imports then we have to use the same name as the export name, but if we import them as default imports then we can use any name we want to import them. So, it is better to use default exports to avoid confusion and make the code more readable.
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//createBrowserRouter is a function provided by react-router-dom that is used to create a router object that can be used to define the routes for our application. It takes an array of route objects as an argument, where each route object defines a path and the component to be rendered when that path is matched. In the above code, we are defining three routes: the root route ("/") which renders the Body component, the "/about" route which renders the About component, and the "/contact" route which renders the ContactUs component. We are also defining an error route which renders the Error component when there is an error in matching any of the defined routes.

//RouterProvider is a component provided by react-router-dom that is used to provide the router object to the rest of the application. It takes the router object created by createBrowserRouter as a prop and makes it available to all the components in the application. In the above code, we are wrapping our entire application with the RouterProvider component and passing the router object as a prop to it. This way, all the components in our application can access the router object and use it to navigate between different routes.

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

//Outlet is a component provided by react-router-dom that is used to render the matched child route component. It is used in the parent route component to render the child route component when the path matches. In the above code, we are using Outlet in the AppLayout component to render the Body component when the path is "/" and to render the About component when the path is "/about" and to render the ContactUs component when the path is "/contact". This way, we can have a common layout for all the routes and only change the content based on the route.

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactUs />,
  // }
]);

//resId is a dynamic parameter that is passed to the RestaurantMenu component when the path is "/restaurants/:resId". It is used to identify the specific restaurant to display the menu for.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

//important points to remember:
//1. React is a JavaScript library for building user interfaces.
//2. React components are reusable pieces of code that return a React element to be rendered to the page.
//3. React components can be functional or class-based. Functional components are simpler and easier to read, while class-based components have more features and are more powerful.
//4. React components can be nested and can be used in multiple places on the page.
//5. React components can be used to create reusable UI elements that can be used in multiple places on the page.
//6. React components can be used to create interactive UI elements that can be used to build complex user interfaces.
//7. React components can be used to create reusable UI elements that can be used in multiple places on the page.

//JavaScript concepts need to know to understand React:
//1. ES6 syntax - arrow functions, destructuring, spread operator, rest operator, template literals, etc.
//2. JavaScript classes and objects - understanding how to create and use classes and objects in JavaScript is important to understand class-based components in React.
//3. JavaScript modules - understanding how to import and export modules in JavaScript is important to understand how to use components in React.
//4. JavaScript arrays and objects - understanding how to manipulate arrays and objects in JavaScript is important to understand how to use state and props in React.
//5. JavaScript functions - understanding how to create and use functions in JavaScript is important to understand how to create functional components in React.
//6. JavaScript events - understanding how to handle events in JavaScript is important to understand how to create interactive UI elements in React.
//7. JavaScript promises and async/await - understanding how to handle asynchronous code in JavaScript is important to understand how to make API calls and handle data in React.

//explanation of above javaScript concepts with examples:
//1. ES6 syntax - arrow functions, destructuring, spread operator, rest operator, template literals, etc.
// Arrow functions - a shorter syntax for writing functions in JavaScript. They are anonymous and do not have their own 'this' context.
// Example:
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output: 5

// Destructuring - a way to extract values from objects and arrays into variables.
// Example:
//Object destructuring
// const person = { name: "John", age: 30 };
// const { name, age } = person;
// console.log(name); // Output: "John"
// console.log(age); // Output: 30
//Array destructuring
// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(c); // Output: 3

// Spread operator - a way to copy values from one object or array into another.
// Example:
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2); // Output: [1, 2, 3]

// Rest operator - a way to collect values into an array.
// Example:
// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3)); // Output: 6

// Template literals - a way to create strings with embedded expressions.
// Example:
// const name = "Alice";
// const age = 30;
// console.log(`Hello, my name is ${name} and I am ${age} years old.`); // Output: Hello, my name is Alice and I am 30 years old.

//2. JavaScript classes and objects - understanding how to create and use classes and objects in JavaScript is important to understand class-based components in React. Classes are a template for creating objects in JavaScript. They can have properties and methods.
// Example:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person1 = new Person("Alice", 30);
// person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.

//3. JavaScript modules - understanding how to import and export modules in JavaScript is important to understand how to use components in React. Modules are reusable pieces of code that can be imported and exported in JavaScript.
// Example:
// math.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

// app.js
// import { add, subtract } from './math.js';
// console.log(add(2, 3)); // Output: 5
// console.log(subtract(5, 2)); // Output: 3

//4. JavaScript arrays and objects - understanding how to manipulate arrays and objects in JavaScript is important to understand how to use state and props in React. Arrays are ordered collections of data, while objects are collections of key-value pairs.
// Example:
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length); // Output: 5
// console.log(arr[0]); // Output: 1
// console.log(arr[arr.length - 1]); // Output: 5
// const obj = { name: "John", age: 30 };
// console.log(obj.name); // Output: "John"
// console.log(obj.age); // Output: 30

//5. JavaScript functions - understanding how to create and use functions in JavaScript is important to understand how to create functional components in React. Functions are reusable blocks of code that can be called with different arguments.
// Example:
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet("Alice"); // Output: Hello, Alice!

//6. JavaScript events - understanding how to handle events in JavaScript is important to understand how to create interactive UI elements in React. Events are actions that occur in the browser, such as clicks, mouse movements, and keyboard input.
// Example:
// const button = document.querySelector("button");
// button.addEventListener("click", () => console.log("Button clicked"));

//7. JavaScript promises and async/await - understanding how to handle asynchronous code in JavaScript is important to understand how to make API calls and handle data in React. Promises are a way to handle asynchronous code in JavaScript, while async/await is a syntax for writing asynchronous code that looks synchronous.
// Example:
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched");
//         }, 2000);
//     });
// }
// async function main() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// main();

// })
// .catch((error) => {
//   console.error(error);
// });

//difference between <abs></abs> && <abc><abc/> is that <abc></abc> is a self-closing tag and <abc><abc/> is a non-self-closing tag. In HTML, self-closing tags are used for elements that do not have any content, such as <img>, <input>, <br>, etc. Non-self-closing tags are used for elements that can have content, such as <div>, <p>, <h1>, etc. In React, both self-closing and non-self-closing tags can be used, but it is recommended to use self-closing tags for elements that do not have any content to improve readability and reduce the chances of errors.

//es6 is mandatory for react? - Yes, ES6 is mandatory for React because React uses ES6 syntax and features such as arrow functions, destructuring, spread operator, rest operator, template literals, etc. to create components and manage state and props. Without ES6, it would be difficult to write and understand React code. Therefore, it is important to have a good understanding of ES6 syntax and features to work with React effectively.

//to write commments in JSX, we can use the following syntax:
// {/* This is a comment in JSX */}

//React.fragment is a component that allows us to group a list of children without adding extra nodes to the DOM. It is useful when we want to return multiple elements from a component without wrapping them in a div or any other container element. We can use React.Fragment in two ways: using the shorthand syntax <>...</> or using the longhand syntax <React.Fragment>...</React.Fragment>. Both of these syntaxes will render the children without adding any extra nodes to the DOM.

//virtual DOM is a concept in React that allows it to efficiently update the UI by keeping a virtual representation of the DOM in memory. When the state of a component changes, React updates the virtual DOM and then compares it with the previous version of the virtual DOM to determine which parts of the actual DOM need to be updated. This process is called reconciliation and it helps React to minimize the number of updates to the actual DOM, which can improve performance and make the UI more responsive.

//React Fiber is a new reconciliation algorithm in React that allows it to break down the rendering work into smaller chunks and prioritize them based on their importance. This allows React to keep the UI responsive even when there are heavy computations or updates happening in the background. React Fiber also introduces the concept of "time slicing", which allows React to pause and resume work as needed, further improving performance and responsiveness. Overall, React Fiber is a significant improvement to the React rendering process and helps to make React applications faster and more efficient.

//2 ways to fetch data from API - first call APi, api takes 2 seconds, so blank page, and then rendering of UI happens. second, we call API, the rendering happens first and then API is called, then APP is rendered, React uses 2nd approach.


//2 types of RENDERING - client side rendering and server side rendering. In client side rendering, the rendering is handled by the client (browser) and the server only serves the initial HTML file. In server side rendering, the rendering is handled by the server and the client receives the fully rendered HTML. React provides tools for both approaches.

//4 types of routing - static routing, dynamic routing, client routing, server routing. Static routing is when the routes are defined in the code and do not change based on user input or other factors. Dynamic routing is when the routes can change based on user input or other factors. Client routing is when the routing is handled by the client (browser) and the server only serves the initial HTML file. Server routing is when the routing is handled by the server and the client makes a request to the server for each route change. React Router provides client side routing for React applications, allowing us to create single page applications with multiple routes without having to reload the page.