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

export default resList;

//3 types of imports - default imports and named imports and *. Default imports are used when we want to import a single value from a module, and we can give any name to that value when we import it. For example, in the above code, we are exporting resList as a default export, so when we import it in another file, we can give any name to it. For example, we can do import data from "./mockData"; and then use data to access the resList array. Cna only have one default export per file.

//Named imports are used when we want to import multiple values from a module, and we have to use the same name as the exported value when we import it. For example, if we have export const constants = { ... }; in the constants.js file, then when we import it in another file, we have to use the same name constants to import it. For example, we can do import { constants } from "./constants"; and then use constants to access the constants object. Can have multiple named exports per file.

//* imports are used when we want to import all the exported values from a module as an object. For example, if we have export const constants = { ... }; and export const resList = [ ... ]; in the constants.js file, then when we import it in another file, we can do import * as data from "./constants"; and then use data.constants to access the constants object and data.resList to access the resList array. Can have multiple named exports per file.

//we can also have both default and named exports in the same file. For example, we can have export const constants = { ... }; and export default resList; in the same file, and then we can import them in another file using import resList, { constants } from "./mockData"; and then use resList to access the resList array and constants to access the constants object.