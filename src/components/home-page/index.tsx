import React from "react";
import IconCheRight from "../icons/icon-chevron-right";
import IconCheLeft from "../icons/icon-chevron-left";



const Home:React.FC = () => {

  return (
    <div className="maintcontent">

       <div className="slider">
        <div className="slider__button slider__button-preview">
          <button className='btn'>
            <IconCheLeft />
          </button>
        </div>

        <div className="slider__button slider__button-next">
          <button className='btn'>
            <IconCheRight />
          </button>
        </div>

        <div className="slider__slides">
          <div id="slide__img-1" className='slider__slides-slide'>
            <img className="slide-img" src='img/anh1.png' alt="img-1" />
          </div>

          <div id="slide__img-2" className='slider__slides-slide'>
            <img className="slide-img" src='img/anh2.png' alt="img-2" />
          </div>

          <div id="slide__img-3" className='slider__slides-slide'> 
            <img className="slide-img" src='img/anh3.png' alt="img-3" />
          </div>

          <div id="slide__img-4" className='slider__slides-slide'>
            <img className="slide-img" src='img/anh4.png' alt="img-4" />
          </div>

          <div id="slide__img-5" className='slider__slides-slide'>
            <img className="slide-img" src='img/anh5.png' alt="img-5" />
          </div>

          <div id="slide__img-6" className='slider__slides-slide'>
            <img className="slide-img" src="img/anh-test.jpg" alt="img-6" />
          </div>

        </div>
      </div>


    </div>  
  )
}

export default Home;