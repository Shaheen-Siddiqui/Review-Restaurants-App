import { useContext } from "react";
import { RestaurantsContext } from "../hook/RestaurantsContext";
import { MatchedRestaurant } from "../component/MatchedRestaurant";

export const RestaurantsListing = () => {
  const { cuisineArray, dispatchRestaurantState } =
    useContext(RestaurantsContext);
  return (
    <center>
      <h1 className="res-name">Food Ordring App</h1>
      {cuisineArray.map((cuisine, index) => {
        return (
          <button
            key={index}
            className="btn btn-danger m-2"
            onClick={() =>
              dispatchRestaurantState({
                type: "SELECTED_CUISINE",
                payload: cuisine.id,
              })
            }
          >
            {cuisine.name}
          </button>
        );
      })}
      <MatchedRestaurant />
    </center>
  );
};
