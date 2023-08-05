export const RecipeCard = ({ menu, restaurantName }) => {
  
  return (
    <div className="d-flex gap-4 mb-5  card-center">
      {menu.map((menuItem, index) => {
        const { name, imgSrc, price , qty} = menuItem;
        return (
          <div className="card text-start" style={{ width: "18rem" }} key={index}>
            <img src={imgSrc} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text text-secondary-emphasis">
                Rs:{price} for {qty}
                <br />
                {restaurantName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
