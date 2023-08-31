import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_API } from "../utils/constants";


const Body = () => {
  const [listofRes, setListofRes] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRes();
  }, []);

  const fetchRes = async () => {
    const data = await fetch(RES_API);

    const json = await data.json();
    console.log(json);

    setListofRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return ( 
  <h1> Looks like you're offline. Please check your internet connection </h1>
  );
 
  return listofRes.length === 0 ?
  (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-2 p-2">
        <input
          className="p-2 pl-20 border border-solid border-black"
          type="text"
          placeholder="Search for food"
          value={searchText}
          onChange={(e)=> {
            setSearchText(e.target.value);
          }}
        />
        <button className="px-6 py-2 border border-black bg-gray-300 m-4 rounded-lg"
          onClick={()=> {
            const filterSearch = listofRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestaurant(filterSearch);
          }}
        >
          Search
        </button>
      </div>
      <div className="m-2 p-2">
        <button
          className="ml-0 m-4 px-6 py-2 border border-black bg-gray-300 flex items-center rounded-lg"
          onClick={() => {
            const filteredlistofRes = listofRes.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterRestaurant(filteredlistofRes);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>  
      <div className="flex flex-wrap">
        {filterRestaurant.map((restaurant) => (
         <Link 
           key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}
         >
          <RestaurantCard  resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;