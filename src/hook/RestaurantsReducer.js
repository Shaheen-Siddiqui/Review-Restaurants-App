export const RestaurantReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELECTED_CUISINE":
      return {
        ...state,
        selectedCuisine: payload,
      };
    case "SET_RATING_CHUCK":
      const { name, value } = payload;
      return {
        ...state,
        ratingChunk: {
          ...state.ratingChunk,
          [name]: value,
        },
      };
    case "GET_RATING_CHUCK":
      return {
        ...state,
        allRestaurant: state.allRestaurant.map((dbItem) =>
          dbItem.id == payload
            ? { ...dbItem, ratings: [...dbItem.ratings, state.ratingChunk] }
            : dbItem
        ),
      };
    case "RESER_CUISINE":
      return {
        ...state,
        selectedCuisine: 0, 
      };
    case "RESET_RATING_CHUNK":
      return{
        ...state,
        ratingChunk: {
          rating: 0,
          comment: "",
          revname: "Shaheen Siddiqui",
          pp: "https://fastly.picsum.photos/id/569/200/200.jpg?hmac=rzX0dRJRyZs2NIa_h_87CJVeoetRLtTlweCZmYrYlCA",
        },
      }

    default:
      break;
  }
};
