import React, { useState } from "react";
import { ARROW_URL } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const[isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setShowIndex();
    setIsOpen(!isOpen);
  }

  return(
    <div>
      <div className=" w-7/12 mx-auto my-4 bg-gray-50 shadow-md p-4">
      <div className="flex justify-between cursor-pointer"
      onClick={handleClick}
      > 
      <span className=" font-bold">
        {data.title} ({data.itemCards.length})
      </span>
      <span><img className="w-6" src={ARROW_URL}></img></span>
      </div> 
      {isOpen && showItems && <ItemList items = {data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;