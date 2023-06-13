import React from 'react'
import HeroBanner from './herobanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Toprated from './toprated/Toprated'
import "./style.scss"
const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <Toprated/>
    </div>
  )
}

export default Home

