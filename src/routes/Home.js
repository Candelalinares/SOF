import React from 'react'
import Video from '../components/Video'
import Navbar from '../components/Navbar'
import ColectionSection from '../components/Colection'
import TeamSection from './Team'
import TopNFT from '../components/TopNFT'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <ColectionSection />
      <TeamSection />
      <TopNFT />
    </div>
  )
}

export default Home