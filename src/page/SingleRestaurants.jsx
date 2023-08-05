import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { RestaurantsContext } from "../hook/RestaurantsContext";
import { RatingCard } from "../component/RatingCard";
import { ReviewModal } from "../component/ReviewModal";

export const SingleRestaurants = () => {
  const [shoModal, setShowModal] = useState(false);
  const { resID } = useParams();
  const { allRestaurant, dispatchRestaurantState } =
    useContext(RestaurantsContext);

  const chosenRestaurant = allRestaurant.find((item) => item.id == resID);
  const { name, address, description, averageRating, ratings } =
    chosenRestaurant;

  return (
    <div className="single-res-sty">
      <div className="d-flex justify-content-between">
        {shoModal && (
          <ReviewModal
            chosenRestaurant={chosenRestaurant}
            setShowModal={setShowModal}
          />
        )}
        <div className="text-start">
          <Link to="/">
            <h2
              className="res-name"
              onClick={() => dispatchRestaurantState({ type: "RESER_CUISINE" })}
            >
              &larr; &nbsp;{name}
            </h2>
          </Link>
          <p>
            {description} <br />
            {address}
            <br />
            Average Rating{averageRating}
          </p>
        </div>
        <span>
          <button
            className="btn btn-danger mt-3"
            onClick={() => setShowModal(true)}
          >
            Add Review
          </button>
        </span>
      </div>
      <h2>Review</h2>
      <hr />

      {ratings.map((ratingsValue) => {
        return (
          <>
            <RatingCard ratingsValue={ratingsValue} />
            <hr />
          </>
        );
      })}
    </div>
  );
};
