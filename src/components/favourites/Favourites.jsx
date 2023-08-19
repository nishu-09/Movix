import React, { useEffect, useState } from "react";
import "./style.scss";
const Favourites = () => {
    const[like,setLike]=useState(false);
    
    const favouritebtn=()=>{
        console.log("clicked");
        setLike(!like);
        
    }
    
  return (
    <>
    <div className="middle-wrapper">
        <div className="like-wrapper" onClick={favouritebtn} >
          <a className={like ? "liked" :  "like-button"} >
            <span className="like-icon">
            </span> 
          </a>
        </div>
    </div>
    </>
  );
};

export default Favourites;
