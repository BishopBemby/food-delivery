you can use ({name, rating, deliveryTime, cost}) instead of props and then use name, rating, deliveryTime and cost instead of props.name, props.rating, props.deliveryTime and props.cost respectively.

you can also use const {name, rating, deliveryTime, cost} = props; instead of ({name, rating, deliveryTime, cost}) and then use name, rating, deliveryTime and cost instead of props.name, props.rating, props.deliveryTime and props.cost respectively.

config driven UI - UI which is driven by the data. Here we are passing the data as props to the RestaurantCard component and then using that data to render the UI. This way we can easily change the UI by changing the data without changing the code.