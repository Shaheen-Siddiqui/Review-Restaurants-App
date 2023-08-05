import { useContext } from "react";
import { RestaurantsContext } from "../hook/RestaurantsContext";

export const ReviewModal = ({ chosenRestaurant, setShowModal }) => {
  const {
    ratingChunk: { comment, rating },
  dispatchRestaurantState,
    ratingChunk,
  } = useContext(RestaurantsContext);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    dispatchRestaurantState({
      type: "SET_RATING_CHUCK",
      payload: { name, value },
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setShowModal(false);
    dispatchRestaurantState({
      type: "GET_RATING_CHUCK",
      payload: chosenRestaurant.id,
    });
    dispatchRestaurantState({type:'RESET_RATING_CHUNK'})
  };

  return (
    <form className="modal-case" onSubmit={formSubmitHandler}>
      <div className="modal-content">
        <div class="input-group mb-3">
          Rating &nbsp; &nbsp; &nbsp;
          <input
            value={rating}
            name="rating"
            type="number"
            class="form-control"
            placeholder="Rating"
            min="1"
            max="5"
            onChange={inputHandler}
          />
        </div>
        <div class="input-group mb-3">
          Comment
          <input
            value={comment}
            name="comment"
            type="text"
            class="form-control"
            placeholder="comment"
            onChange={inputHandler}
          />
        </div>
        <center>
          <button className="btn btn-outline-danger m-3">Add Review</button>
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Discard
          </button>
        </center>
      </div>
    </form>
  );
};
