import { constants } from "../utils/constants";
export const RestaurantCard = ({resData}) => {
 
  // you can use ({name, rating, deliveryTime, cost}) instead of props and then use name, rating, deliveryTime and cost instead of props.name, props.rating, props.deliveryTime and props.cost respectively

  // you can also use const {name, rating, deliveryTime, cost} = props; instead of ({name, rating, deliveryTime, cost}) and then use name, rating, deliveryTime and cost instead of props.name, props.rating, props.deliveryTime and props.cost respectively

  //config driven UI - UI which is driven by the data. Here we are passing the data as props to the RestaurantCard component and then using that data to render the UI. This way we can easily change the UI by changing the data without changing the code.
  const { name, avgRating, sla, costForTwo, cloudinaryImageId } = resData?.info;

   console.log("resData in restaurant card", resData?.info);
  return (
    <div className="restaurant-card">
      <img
        src={constants.FETCH_IMG_URL + cloudinaryImageId}
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

export default RestaurantCard;

// Here I did both named and default exports. Is this valid? => Yes, it is valid to have both named and default exports in the same file. You can have multiple named exports and one default export in a file. In this case, we have a named export for the RestaurantCard component and a default export for the same component. When you import this component in another file, you can choose to import it as a named import or as a default import. For example, you can do import { RestaurantCard } from "./RestaurantCard"; to import it as a named import, or you can do import RestaurantCard from "./RestaurantCard"; to import it as a default import. Both will work fine.