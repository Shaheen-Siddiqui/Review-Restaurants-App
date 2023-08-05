export const RatingCard = ({ ratingsValue }) => {
  const { revName, comment, pp, rating } = ratingsValue;
  return (

      <div className="d-flex justify-content-between text-start">
        <div>
          <img src={pp} alt={revName}  className="user-image"/>&nbsp; <strong>

          {revName}
          </strong>
          
          <p>{comment}</p>
        </div>
        <span>
          <button className="btn btn-success text-warning">{rating}</button>
        </span>
      </div>
      
  );
};
