import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;

  return (
    <div className=" m-4 p-4 w-[200px] bg-gray-200 rounded-lg hover:bg-gray-300 ">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId
        }
      ></img>

      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className=" text-sm">{cuisines.join(", ")}</h4>
      <div className="flex py-2">
      <h4 className=" text-sm font-semibold">{avgRating}⭐</h4>
      <h4 className=" pl-10 text-sm font-semibold">{costForTwo}</h4>
      </div>
      <h4 className=" font-semibold text-sm">{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;