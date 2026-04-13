import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //normal variable - 
  // if we change the value of this variable, it will not trigger a re-render of the component, because it is not a state variable. React doesn't allow us to change the value of a normal variable inside a functional component. Why? - React makes UI layer and data layer work together, so if we change the value of a normal variable inside a functional component, it will not trigger a re-render of the component. So, if we want to change the value of this variable and trigger a re-render of the component, we need to use a state variable instead of a normal variable. For example, we can use useState hook to create a state variable for the list of restaurants and then update that state variable when we want to change the list of restaurants. This way, when we update the state variable, it will trigger a re-render of the component and the UI will be updated with the new list of restaurants.
  //   let listOfRestaurants = resList;
  //state variable - if we change the value of this variable, it will trigger a re-render of the component, because it is a state variable. So, if we want to change the value of this variable and trigger a re-render of the component, we can use useState hook to create a state variable for the list of restaurants and then update that state variable when we want to change the list of restaurants. This way, when we update the state variable, it will trigger a re-render of the component and the UI will be updated with the new list of restaurants.
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  //array destructured version of above code - const listOfRestaurants = useState(resList)[0]; and const setListOfRestaurants = useState(resList)[1];
  const listOFRestaurants2 = useState(resList)[0];
  const setListOfRestaurants2 = useState(resList)[1];


  return (
    <div className="body">
      {/* <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="search-input"
        />
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            ).sort((a, b) => b.info.avgRating - a.info.avgRating));
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurants">
        <RestaurantsContainer resData={listOfRestaurants} />
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
  return (
    <div className="restaurant-card-container">
      {resData.map((restaurant) => {
        return <RestaurantCard resData={restaurant} key={restaurant.info.id} />;
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
