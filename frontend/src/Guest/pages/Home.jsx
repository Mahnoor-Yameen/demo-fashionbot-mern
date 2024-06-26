import React from 'react'
import { Link } from 'react-router-dom'
import CategoryLine from '../components/CategoryLine'
import Footer from '../components/Footer'
import Ads from '../components/Ads'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <>
<Banner/>

<Link to="/chatbot" className="text-decoration-none">

            <marquee className="text-dark" behavior="" direction="right" width="100%" id="home">Use AI ChatBot for Assistance</marquee>
</Link>

      <CategoryLine/>
      <Ads/>
      <Footer/>

    </>
  )
}
