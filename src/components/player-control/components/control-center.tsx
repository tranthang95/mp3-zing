import React from 'react';
import IconJumpStart from '../../icons/icon-jump-start';
import IconJumpNext from '../../icons/icon-jump-next';
import IconShuffle from '../../icons/icon-shuffle';
import IconPause from '../../icons/icon-pause';
import IconLoop from '../../icons/icon-loop';


const ControlCenter: React.FC = () => {

  return (
    <div className='control'>
      <div className='control__item'> 
        <div className='control__button'>
          <IconShuffle />
          <IconJumpStart />
          <IconPause />
          <IconJumpNext />
          <IconLoop />
        </div>
        <div className='control__time'>
          <span id="currentTime">00:00</span>
          <input id="seek" type="range" min="0" max="100" value="50" />
          <span id="durationTime">05:31</span>
        </div>
      </div>
    </div>
  )
}

export default ControlCenter;