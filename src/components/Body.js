import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //normal variable -
  // if we change the value of this variable, it will not trigger a re-render of the component, because it is not a state variable. React doesn't allow us to change the value of a normal variable inside a functional component. Why? - React makes UI layer and data layer work together, so if we change the value of a normal variable inside a functional component, it will not trigger a re-render of the component. So, if we want to change the value of this variable and trigger a re-render of the component, we need to use a state variable instead of a normal variable. For example, we can use useState hook to create a state variable for the list of restaurants and then update that state variable when we want to change the list of restaurants. This way, when we update the state variable, it will trigger a re-render of the component and the UI will be updated with the new list of restaurants.
  //   let listOfRestaurants = resList;
  //state variable - if we change the value of this variable, it will trigger a re-render of the component, because it is a state variable. So, if we want to change the value of this variable and trigger a re-render of the component, we can use useState hook to create a state variable for the list of restaurants and then update that state variable when we want to change the list of restaurants. This way, when we update the state variable, it will trigger a re-render of the component and the UI will be updated with the new list of restaurants.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  //array destructured version of above code - const listOfRestaurants = useState(resList)[0]; and const setListOfRestaurants = useState(resList)[1];
  const listOFRestaurants2 = useState(resList)[0];
  const setListOfRestaurants2 = useState(resList)[1];


  const [searchText, setSearchText] = useState("");

  //useEffect hook - it is a hook that allows us to perform side effects in our functional components. It takes a function as an argument and that function will be called after the component is rendered. We can use useEffect hook to fetch data from an API when the component is mounted and then update the state variable with the fetched data. This way, when the component is mounted, it will fetch the data and update the UI with the fetched data. We can also use useEffect hook to perform cleanup when the component is unmounted, such as clearing timers or canceling API requests.
  //takes 2 arguments - first is a function that will be called after the component is rendered, second is a dependency array that tells React when to call the function. If we provide an empty dependency array, it will call the function only once when the component is mounted. If we do not provide a dependency array, it will call the function every time the component is rendered, which can lead to infinite loop and performance issues. If we provide a dependency array with some variables, it will call the function only when those variables change.
  useEffect(() => {
    //API call - we can use fetch or axios to call API, but here we are using setTimeout to simulate an API call, because we are using mock data. So, we are simulating an API call that takes 2 seconds to fetch the data and then update the state variable with the fetched data. This way, when the component is mounted, it will fetch the data and update the UI with the fetched data.
    console.log("inside useEffect");

    fetchData();
  }, []);
  //In above, if no dependency array is provided, the useEffect will run every time the component is rendered, which can lead to infinite loop and performance issues. Therefore, it is important to provide an empty dependency array to run the useEffect only once when the component is mounted.
  //if we provide a dependency array with some variables, it will call the function only when those variables change. For example, if we provide [searchText] as a dependency array, it will call the function only when the searchText variable changes. This way, we can optimize the performance of our component by only calling the function when necessary. However, in this case, we want to fetch the data only once when the component is mounted, so we provide an empty dependency array to run the useEffect only once when the component is mounted.
  
  //empty dependency array means this useEffect will run only once when the component is mounted, if we do not provide empty dependency array, it will run every time the component is rendered, which can lead to infinite loop and performance issues.

  console.log("outside useEffect");
  //above code will be rendered first and then the code inside useEffect will be executed, because useEffect is called after the component is rendered. So, when the component is mounted, it will render the UI first and then call the function inside useEffect, which will log 'inside useEffect' in the console. If we do not provide an empty dependency array, it will call the function every time the component is rendered, which can lead to infinite loop and performance issues. Like in search function, when we type something, for every key stroke, the component will be rendered again and again, which will trigger re-render of the component. So, when we update the state variable with the filtered list of restaurants, it will trigger a re-render of the component and the useEffect will be called again, which will call the fetchData function again and update the state variable with the fetched data, which will trigger another re-render of the component and the useEffect will be called again, which will call the fetchData function again and update the state variable with the fetched data, which will trigger another re-render of the component and so on, which can lead to infinite loop and performance issues. Therefore, it is important to provide an empty dependency array to run the useEffect only once when the component is mounted.

  const fetchData = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );
    const json = await data.json();
    console.log(
      "fetched data",
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    //optional chaining - 
    // it is a feature in JavaScript that allows us to access nested properties of an object without having to check if each property in the chain exists. It is denoted by the ?. operator. In the above code, we are using optional chaining to access the nested properties of the json object that we fetched from the API. This way, if any of the properties in the chain do not exist, it will return undefined instead of throwing an error. This helps to prevent runtime errors and makes our code more robust. In this case, we are trying to access the list of restaurants from the fetched data, and if any of the properties in the chain do not exist, it will return undefined instead of throwing an error.
    const extractedData =
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(extractedData);
      setFilteredListOfRestaurants(extractedData);
  };

  //conditional rendering - 
  // it is a technique in React that allows us to render different UI based on certain conditions. In the below code, we are using conditional rendering to show a shimmer effect while the data is being fetched from the API. If the list of restaurants is empty, it means that the data is still being fetched, so we show the Shimmer component. Once the data is fetched and the list of restaurants is updated, it will trigger a re-render of the component and the UI will be updated with the list of restaurants. This way, we can provide a better user experience by showing a loading indicator while the data is being fetched.
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }
  // or below together

  const search = () => {
    if (searchText === "") {
      setFilteredListOfRestaurants(resList);
      return;
    }
    const restaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    //difference between include and === is that include is used to check if a string contains another string, while === is used to check if two values are equal. In the above code, we are using === to check if the name of the restaurant is exactly equal to the search text, which means that it will only return the restaurants that have the exact name as the search text. If we use include instead of ===, it will return all the restaurants that have the search text as a part of their name, which can lead to more results being returned than expected. Therefore, it is important to choose the right operator based on the desired behavior of the search functionality.

    //use pizza in search and hit search, it will return all the restaurants that have pizza in their name, because we are using include operator. If we use === operator, it will return only the restaurants that have the exact name as pizza, which may not be what we want as it may break code. Therefore, it is important to choose the right operator based on the desired behavior of the search functionality.
    setFilteredListOfRestaurants(restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={search}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //following code is not working
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.0);  
            setFilteredListOfRestaurants(
              filteredList.sort((a, b) => b.info.avgRating - a.info.avgRating),
            );
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurants">
        <RestaurantsContainer resData={filteredListOfRestaurants} />
      </div>
    </div>
  );
};

const RestaurantsContainer = ({ resData }) => {
  //using map,
  // key is important to give unique key to each element in the list, here we are using restaurant.info.id as key because it is unique for each restaurant
  //use case of using key as must property in react, when we are rendering a list of elements, react uses the key to identify which element has changed, added or removed, this helps react to optimize the rendering process and improve performance. If we do not provide a key or provide a non-unique key, react will not be able to identify which element has changed and will re-render the entire list, which can lead to performance issues. Therefore, it is important to provide a unique key for each element in the list when rendering in react.
  //some people uses index as key, but it is not recommended because it can lead to performance issues and bugs when the list is updated, because the index can change when the list is updated, which can cause react to re-render the entire list instead of just the changed element. Therefore, it is better to use a unique identifier from the data as key, such as restaurant.info.id in this case. React itself also gives a warning in the console when we do import resList from './../utils/mockData';
  // not provide a key or provide a non-unique key, so it is always better to provide a unique key for each element in the list when rendering in react. Index as a key is an anti-pattern and should be avoided in most cases, especially when the list can change dynamically.

  console.log("resData in restaurant container", resData);
  return (
    <div className="restaurant-card-container">
      {resData?.map((restaurant) => {
        return (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default Body;

//Hooks ? -
// Hooks are prebuilt JS functions that allow us to add state and other features to functional components. There are many hooks in react - useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect, useDebugValue

//useState - it is a hook that allows us to add state to our functional components. It returns an array with two elements, the first element is the current state value and the second element is a function that allows us to update the state value. When we call the function to update the state value, it will trigger a re-render of the component and the UI will be updated with the new state value. We can use useState hook to create a state variable for the list of restaurants and then update that state variable when we want to change the list of restaurants. This way, when we update the state variable, it will trigger a re-render of the component and the UI will be updated with the new list of restaurants.

//useEffect - it is a hook that allows us to perform side effects in our functional components. It takes a function as an argument and that function will be called after the component is rendered. We can use useEffect hook to fetch data from an API when the component is mounted and then update the state variable with the fetched data. This way, when the component is mounted, it will fetch the data and update the UI with the fetched data. We can also use useEffect hook to perform cleanup when the component is unmounted, such as clearing timers or canceling API requests.

//SO why React is fast ? - React is fast because it uses a virtual DOM to optimize the rendering process. When we update the state of a component, React creates a new virtual DOM tree and compares it with the previous virtual DOM tree to identify which parts of the actual DOM need to be updated. This process is called reconciliation. By only updating the parts of the actual DOM that have changed, React can minimize the number of DOM manipulations and improve performance. Additionally, React also batches multiple state updates together to further optimize the rendering process.

//Reconciliation Algorithm (React Fiber) - React Fiber is the reconciliation algorithm used by React to optimize the rendering process. It breaks down the rendering work into smaller units called fibers, which can be processed asynchronously(incremental rendering). This allows React to prioritize updates and keep the UI responsive even during heavy rendering tasks. React Fiber also uses a technique called time slicing to allow it to interrupt long-running rendering tasks and yield control back to the main thread, which helps to prevent blocking the UI and improve performance. Overall, React Fiber is designed to make React fast and efficient by optimizing the rendering process and keeping the UI responsive.
//For example in above filtering example, when we click on the "Top rated restaurants" button, it will update the state variable listOfRestaurants with the filtered list of restaurants that have an average rating greater than 4.5. This will trigger a re-render of the Body component and the RestaurantsContainer component will receive the updated list of restaurants as props and re-render the list of RestaurantCard components with the new data. This way, we can see the updated list of top-rated restaurants in the UI without having to refresh the page.

//virtual DOM - it is a lightweight copy of the actual DOM that React uses to optimize the rendering process.

//Diff algorithm - also known as`reconciliation algorithm` or "React fiber" - it is a algorithm that React uses to determine which parts of the actual DOM need to be updated when the state of a component changes.

// difference between JS expression and JS statement - A JavaScript expression is a piece of code that evaluates to a value, while a JavaScript statement is a piece of code that performs an action. In React, we can use JavaScript expressions inside JSX to dynamically render content based on the state or props of a component. For example, we can use a ternary operator (which is an expression) to conditionally render different UI elements based on the value of a state variable. On the other hand, JavaScript statements are used to perform actions such as updating state, making API calls, or handling events. In React components, we typically use statements inside event handlers or lifecycle methods to perform actions based on user interactions or component lifecycle events. Eg. 
// const handleClick = () => {
  // This is a JavaScript statement that performs an action when the button is clicked
//   setCount(count + 1);
// }


//What is async and await? - async and await are keywords in JavaScript that allow us to handle asynchronous code in a more readable and efficient way. They are used together to make API calls and handle data in React.
