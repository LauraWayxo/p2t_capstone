import React from 'react'
// import PropTypes from 'prop-types'
import landingImage from "../assets/image1.png"; 
import appDownloadImage from "../assets/image4.png"; 

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5x1 font-bold tracking-tight text-pink-600">
                    Order with your Calories in Mind! 
                </h1>
                <span className="text-x1">Tracking your goals on the made easier!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter"></span>
                    <span>
                        Download CalEats for faster ordering and personalised recommendations
                    </span>
                    <img src={appDownloadImage}/>
                </div>
            </div>
        </div>
      );
};

export default HomePage;

