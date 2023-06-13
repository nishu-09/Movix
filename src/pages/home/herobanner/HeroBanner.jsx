import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss";
const HeroBanner = () => {
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const [background, Setbackground] = useState("");
  const [query, SetQuery] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
      // console.log(bg)
    Setbackground(bg);
    
  }, [data]);

  const searchQueryhandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  const searchBun=()=>{
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  }
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="image_backdrop">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="Wrapper">
          <div className="herobannercontent">
            <span className="title">Welcome.</span>
            <span className="subtitle">
              Millons of movies, TV shows and people to discover, Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onKeyUp={searchQueryhandler}
                onChange={(e) => SetQuery(e.target.value)}
              />
              <button type="button" onClick={searchBun}>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
