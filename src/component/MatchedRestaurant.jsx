import { useContext } from "react";
import { RestaurantsContext } from "../hook/RestaurantsContext";
import { RestaurantCard } from "./RestaurantCard";

export const MatchedRestaurant = () => {
  const { userSelectedCuisine } = useContext(RestaurantsContext);
  return (
    <>
      {userSelectedCuisine.map((selectedItem, index) => {
        return <RestaurantCard key={index} 
        selectedItem={selectedItem} />;
      })}
    </>
  );
};
