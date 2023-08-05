import { RecipeCard } from "./RecipeCard";
import { Link } from "react-router-dom";

export const RestaurantCard = ({ selectedItem }) => {
  const { name, menu, id } = selectedItem;

  return (
    <Link to={`/${id}`}>
      <h2 className="res-name">{name}</h2>
        <RecipeCard restaurantName={name} menu={menu} />
    </Link>
  );
};
