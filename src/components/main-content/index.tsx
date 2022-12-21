import React from "react";
import {Link} from "react-router-dom";

import img1 from "../../img/anh1.png";
import img2 from "../../img/anh2.png";
import img3 from "../../img/anh3.png";
import img4 from "../../img/anh4.png";
import img5 from "../../img/anh5.png";

const MainContent:React.FC = () => {



  return (
    <div className="maintcontent">

       <div className="slider">
        <div className="slider__button slider__button-preview">
          <button className='btn'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-left</title>
              <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
            </svg>
          </button>
        </div>

        <div className="slider__button slider__button-next">
          <button className='btn'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
            </svg>
          </button>
        </div>

        <div className="slider__slides">
          <div id="slide__img-1" className='slider__slides-slide'>
            <img className="slide-img" src={img1} alt="img-1" />
          </div>

          <div id="slide__img-2" className='slider__slides-slide'>
            <img className="slide-img" src={img2} alt="img-2" />
          </div>

          <div id="slide__img-3" className='slider__slides-slide'> 
            <img className="slide-img" src={img3} alt="img-3" />
          </div>

          <div id="slide__img-4" className='slider__slides-slide'>
            <img className="slide-img" src={img4} alt="img-4" />
          </div>

          <div id="slide__img-5" className='slider__slides-slide'>
            <img className="slide-img" src={img5} alt="img-5" />
          </div>

          <div id="slide__img-6" className='slider__slides-slide'>
            <img className="slide-img" src={require("../../img/anh-test.jpg")} alt="img-6" />
          </div>

        </div>
      </div>


    </div>  
  )
}

export default MainContent;