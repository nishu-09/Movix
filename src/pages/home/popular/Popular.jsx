import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import { useState } from 'react'
import UseFetch from "../../../hooks/UseFetch"
import Carousel from '../../../components/carousel/Carousel'
const Popular = () => {
    const [endpoint,setEndpoint]=useState("movie")
    const{data,loading}=UseFetch(`/${endpoint}/popular`);

    const onTabChange=(tab)=>{
        setEndpoint(tab==="Movies"?"movie":"tv")
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <div style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
        <span className="carouselTitle">
            What's Popular
        </span>
        <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default Popular
