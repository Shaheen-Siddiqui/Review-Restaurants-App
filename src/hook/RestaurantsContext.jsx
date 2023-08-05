import { createContext, useReducer } from "react";
import { cuisineData, restaurantsData } from "../database/data";
import { RestaurantReducer } from "./RestaurantsReducer";

export const RestaurantsContext = createContext(null);

export const RestaurantsContextProvider = ({ children }) => {
  const [
    { allRestaurant, cuisineArray, selectedCuisine, ratingChunk },

    dispatchRestaurantState,
  ] = useReducer(
    RestaurantReducer,

    {
      allRestaurant: restaurantsData,
      cuisineArray: cuisineData,
      selectedCuisine: 0,
      ratingChunk: {
        rating: 0,
        comment: "",
        revname: "Shaheen Siddiqui",
        pp: "https://fastly.picsum.photos/id/569/200/200.jpg?hmac=rzX0dRJRyZs2NIa_h_87CJVeoetRLtTlweCZmYrYlCA",
      },
    }
  );

  const userSelectedCuisine = allRestaurant.filter(
    ({ cuisine_id }) => cuisine_id == selectedCuisine
  );

  return (
    <RestaurantsContext.Provider
      value={{
        allRestaurant,
        cuisineArray,
        dispatchRestaurantState,
        userSelectedCuisine,
        ratingChunk,
        selectedCuisine
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
