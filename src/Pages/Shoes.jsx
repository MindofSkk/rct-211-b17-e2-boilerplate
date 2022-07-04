import React, { useEffect } from "react";
import {useSelector,useDispatch}  from 'react-redux';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { shoeData } from "../Redux/AppReducer/action";

const Shoes = () => {
 const shoes= useSelector(state=>state.appReducer.shoes);
 const [searchParams]= useSearchParams();
 const location= useLocation();
 const dispatch=useDispatch();


 useEffect(() => {

  if (shoes.length === 0 || location.search) {
    const getParams={
      params:{
          category:searchParams.getAll('category'),
      },
    }
    dispatch(shoeData(getParams));
  }
}, [location.search]);


 console.log(shoes);

  return (
    <div>
      <Filter />
      <div  style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        width: "80%",
        gap: "10px",
        justifyContent: "space-around",
        margin: "auto",
        border:"1px solid black"
      }}>
        {/* Map through the shoes list here using ShoeCard Component */}
           {
            shoes?.length>0 && shoes.map(item=>{
              return(
                <div key={item.id}>
                  <Link to='#'>
                    <ShoeCard {...item}/>
                  </Link>
                </div>
              )
            })
           }
      </div>
    </div>
  );
};

export default Shoes;