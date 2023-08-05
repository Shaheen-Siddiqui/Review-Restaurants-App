import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RestaurantsListing } from "./page/RestaurantsListing";
import { SingleRestaurants } from "./page/SingleRestaurants";


function App() {
  return (
    <div className="components-style">
      <Routes>
        <Route path="/" element={<RestaurantsListing />} />
        <Route path="/:resID" element={<SingleRestaurants/>} />
      </Routes>
    </div>
  );
}

export default App;
