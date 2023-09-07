import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Infosection from '../components/Infosection'
import Footer2 from '../components/Footer2'
import Faq from '../components/Faq'
import Feature from '../components/Feature'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Infosection />
    <Feature />
    <Faq />
    <Footer2 />
    </>
  )
}

export default Homepage