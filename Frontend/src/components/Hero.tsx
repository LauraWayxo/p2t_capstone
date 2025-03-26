import React from 'react'
// import PropTypes from 'prop-types'
import hero from "../assets/image0.png";

const Hero = () => {
  return (
    <div>
        <img src={hero} className="w-full max-h-[600px] object-cover"/>
    </div>
  )
};

export default Hero; 
