import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { constants } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  //resId is coming from the URL. We are using useParams hook to get the resId from the URL. The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. In this case, we have defined a route for the restaurant menu page as /restaurants/:resId, where :resId is a dynamic parameter that will match any value in that position in the URL. So when we navigate to a restaurant menu page, the resId will be extracted from the URL and we can use it to fetch the restaurant menu data from the API.s

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(constants.MENU_URL + resId);
    const json = await data?.json();
    console.log(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card,
    );
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  //return shimmer before the data is loaded. Once the data is loaded, return the restaurant menu. This is called conditional rendering in React. We are checking if the resInfo is null, if it is null then we are returning the Shimmer component, otherwise we are returning the restaurant menu. The following code will break if the data is not in the expected format. So we are using optional chaining to avoid the error. Optional chaining is a feature in JavaScript that allows you to safely access nested properties of an object without having to check if each property exists. If any property in the chain is null or undefined, the expression will short-circuit and return undefined instead of throwing an error.

  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;
  console.log("Items", itemCards);

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>Rating: {avgRating}</p>
      <p>Delivery Time: {sla?.deliveryTime}</p>
      <img src={cloudinaryImageId} alt={name} />
      <p>Cost for Two: {costForTwo}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            <h3>{item.card.info.name}</h3>
            <p>{item.card.info.description}</p>
            <p>{item.card.info.price / 100}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
