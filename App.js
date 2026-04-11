import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
  {
    info: {
      id: "123456",
      name: "Pizza Paradise",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      locality: "MG Road",
      areaName: "Central District",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRatingsString: "10K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        slaString: "30 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
    },
  },
  {
    info: {
      id: "234567",
      name: "Burger Hub",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Park Street",
      areaName: "Downtown",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRatingsString: "15K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        slaString: "25 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
    },
  },
  {
    info: {
      id: "345678",
      name: "Green Bites",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Residency Road",
      areaName: "South Zone",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Vegan"],
      avgRating: 4.7,
      avgRatingString: "4.7",
      totalRatingsString: "8K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        slaString: "20 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
    },
  },
  {
    info: {
      id: "456789",
      name: "Spice Kingdom",
      cloudinaryImageId: "rng/md/carousel/production/indian101",
      locality: "Brigade Road",
      areaName: "City Center",
      costForTwo: "₹500 for two",
      cuisines: ["Indian", "North Indian", "Biryani"],
      avgRating: 4.2,
      avgRatingString: "4.2",
      totalRatingsString: "12K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4,
        slaString: "35 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
    },
  },
  {
    info: {
      id: "567890",
      name: "Chinese Dragon",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ba9f1f59-30d5-44de-afad-df6db8471ead_9648.jpg",
      locality: "Commercial Street",
      areaName: "East District",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "Asian", "Thai"],
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRatingsString: "9K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.8,
        slaString: "28 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
  },
  {
    info: {
      id: "678901",
      name: "Dessert Delight",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/731001f1-f1c4-4f5f-849f-79a697cb0b72_390173.jpg",
      locality: "Lavelle Road",
      areaName: "West End",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery"],
      avgRating: 4.6,
      avgRatingString: "4.6",
      totalRatingsString: "7K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        slaString: "22 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹60",
      },
    },
  },
  {
    info: {
      id: "789012",
      name: "Sushi Station",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG",
      locality: "Indiranagar",
      areaName: "Uptown",
      costForTwo: "₹800 for two",
      cuisines: ["Japanese", "Sushi", "Asian"],
      avgRating: 4.8,
      avgRatingString: "4.8",
      totalRatingsString: "5K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 40,
        lastMileTravel: 5.2,
        slaString: "40 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹150",
      },
    },
  },
  {
    info: {
      id: "890123",
      name: "South Spice",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG",
      locality: "Jayanagar",
      areaName: "South Bangalore",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Dosa", "Idli"],
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRatingsString: "11K+ ratings",
      veg: true,
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        slaString: "25 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "35% OFF",
        subHeader: "UPTO ₹70",
      },
    },
  },
  {
    info: {
      id: "901234",
      name: "Pasta Palace",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/7bd350a8-55e7-459b-83a2-e250e670d194_14558.JPG",
      locality: "Koramangala",
      areaName: "Tech Hub",
      costForTwo: "₹450 for two",
      cuisines: ["Italian", "Pasta", "Continental"],
      avgRating: 4.1,
      avgRatingString: "4.1",
      totalRatingsString: "6K+ ratings",
      veg: false,
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.8,
        slaString: "32 mins",
      },
      aggregatedDiscountInfoV3: {
        header: "45% OFF",
        subHeader: "UPTO ₹90",
      },
    },
  },
];

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItems />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img
        src="https://png.pngtree.com/png-vector/20240806/ourlarge/pngtree-free-food-delivery-logo-template-png-image_13394103.png"
        alt="logo"
        className="logo"
      />
    </div>
  );
};

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="search-input"
        />
      </div>
      <div className="restaurants">
        <RestaurantsContainer resData={resList} />
      </div>
    </div>
  );
};

const RestaurantsContainer = ({ resData }) => {
    //using map, key is important to give unique key to each element in the list, here we are using restaurant.info.id as key because it is unique for each restaurant
    //use case of using key as must property in react, when we are rendering a list of elements, react uses the key to identify which element has changed, added or removed, this helps react to optimize the rendering process and improve performance. If we do not provide a key or provide a non-unique key, react will not be able to identify which element has changed and will re-render the entire list, which can lead to performance issues. Therefore, it is important to provide a unique key for each element in the list when rendering in react.
    //some people uses index as key, but it is not recommended because it can lead to performance issues and bugs when the list is updated, because the index can change when the list is updated, which can cause react to re-render the entire list instead of just the changed element. Therefore, it is better to use a unique identifier from the data as key, such as restaurant.info.id in this case. React itself also gives a warning in the console when we do not provide a key or provide a non-unique key, so it is always better to provide a unique key for each element in the list when rendering in react. Index as a key is an anti-pattern and should be avoided in most cases, especially when the list can change dynamically.
  return (
    <div className="restaurant-card-container">
      {resData.map((restaurant) => {
        return <RestaurantCard resData={restaurant} key={restaurant.info.id} />;
      })}
    </div>
  );
};

const RestaurantCard = ({resData}) => {
  // you can use ({name, rating, deliveryTime, cost}) instead of props and then use name, rating, deliveryTime and cost instead of props.name, props.rating, props.deliveryTime and props.cost respectively

  // you can also use const {name, rating, deliveryTime, cost} = props; instead of ({name, rating, deliveryTime, cost}) and then use name, rating, deliveryTime and cost instead of props.name, props.rating, props.deliveryTime and props.cost respectively

  //config driven UI - UI which is driven by the data. Here we are passing the data as props to the RestaurantCard component and then using that data to render the UI. This way we can easily change the UI by changing the data without changing the code.
  const { name, avgRating, sla, costForTwo, cloudinaryImageId } = resData?.info;
  return (
    <div className="restaurant-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="restaurant"
        className="restaurant-card-image"
      />
      <h2>{name}</h2>
      <h3>{avgRating}</h3>
      <h3>{sla?.slaString}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


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
// const person = { name: "John", age: 30 };
// const { name, age } = person;
// console.log(name); // Output: "John"
// console.log(age); // Output: 30

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


