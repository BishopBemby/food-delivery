/** Custom hook to fetch restaurant menu */
import { useState, useEffect } from "react";
import { constants } from "../constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=" + constants.MENU_URL + resId,
    );
    const json = await data?.json();
    console.log(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card,
    );
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
