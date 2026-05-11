import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { constants } from "../utils/constants";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import MenuAccordion from "./MenuAccordion";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  //resId is coming from the URL. We are using useParams hook to get the resId from the URL. The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. In this case, we have defined a route for the restaurant menu page as /restaurants/:resId, where :resId is a dynamic parameter that will match any value in that position in the URL. So when we navigate to a restaurant menu page, the resId will be extracted from the URL and we can use it to fetch the restaurant menu data from the API.s

  //below is a custom hook that we have created to fetch the restaurant menu data from the API. We are passing the resId as an argument to the custom hook and it will return the restaurant menu data. We are using this custom hook in our RestaurantMenu component to fetch the restaurant menu data and render it on the screen.
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  //return shimmer before the data is loaded. Once the data is loaded, return the restaurant menu. This is called conditional rendering in React. We are checking if the resInfo is null, if it is null then we are returning the Shimmer component, otherwise we are returning the restaurant menu. The following code will break if the data is not in the expected format. So we are using optional chaining to avoid the error. Optional chaining is a feature in JavaScript that allows you to safely access nested properties of an object without having to check if each property exists. If any property in the chain is null or undefined, the expression will short-circuit and return undefined instead of throwing an error.

  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;
  console.log("Items", itemCards);

  console.log(
    "Items category",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards,
  );

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  console.log("category", category);

  return (
    <div className="px-16 py-16 flex flex-col">
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <span className="font-bold text-3xl">{name}</span>
          <span className="text-md pt-2">{cuisines.join(", ")}</span>
        </div>
        <span className="font-bold text-lg">Rating: {avgRating}</span>
      </div>

      {/* <img className="w-full h-96" src={constants.FETCH_IMG_URL + cloudinaryImageId} alt={name} /> */}
      <div className="flex justify-between">
        <span className="font-bold text-lg">Cost for Two: {costForTwo}</span>
        <span className="font-bold text-lg">
          Delivery Time: {sla?.deliveryTime} mins
        </span>
      </div>

      {/* <span className="font-bold text-lg mt-8 mb-2">Menu</span>
      <ul className="flex flex-col">
        {itemCards?.map((item) => (
          <li
            className="py-2 flex items-baseline gap-4"
            key={item.card.info.id}
          >
            <span className="font-bold">{item.card.info.name}</span>
            <span className="text-sm">{item.card.info.description}</span>
            <span className="font-bold">Rs. {item.card.info.price / 100}</span>
          </li>
        ))}
      </ul> */}

      {/* accordions for categories */}
      {category?.map((c, index) => (
        // controlled component
        <MenuAccordion
          key={c.card.card.title}
          data={c.card.card}
          toggle={toggle}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

const toggle = () => {
  console.log("toggle from parent");
};

export default RestaurantMenu;


/**Props Drilling - Passing data from a child component to a parent component, and then passing that data to another child component. This is called props drilling. This is a bad practice in React. To correct this, we can use context API, or state management libraries like Redux, or a custom hook.  */
