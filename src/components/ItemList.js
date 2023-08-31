import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className=" w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className=" block text-sm font-medium">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className=" text-xs">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12  p-4 ">
            <img
              src={CDN_URL + item.card.info.imageId} 
              className=" rounded-md "
            ></img>
            <div className=" relative flex items-center justify-center">
              <button className="  p-1 px-7 rounded-lg bg-gray-100 font-semibold shadow-md m-auto absolute text-md text-emerald-700 ">
                {" "}
                ADD+{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
