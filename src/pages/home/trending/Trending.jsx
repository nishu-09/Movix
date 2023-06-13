import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import { useState } from 'react'
import UseFetch from "../../../hooks/UseFetch"
import Carousel from '../../../components/carousel/Carousel'
const Trending = () => {
    const [endpoint,setEndpoint]=useState("day")
    const{data,loading}=UseFetch(`/trending/all/${endpoint}`);

    const onTabChange=(tab)=>{
        setEndpoint(tab==="Day"?"day":"week")
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <div style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
        <span className="carouselTitle">
            Trending
        </span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
