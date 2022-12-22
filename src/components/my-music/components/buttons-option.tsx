import React from 'react';
import IconPlay from '../../icons/icon-play';
import IconClose from '../../icons/icon-close';
import IconDot from '../../icons/icon-dot-three';

const ButtonOption: React.FC = () => {
  
  return (
    <div className='button-option'>
      <button className='btn button-option__close'>
        <IconClose />
      </button>

      <button className='btn button-option__play'>
        <IconPlay />
      </button>

      <button className='btn button-option__dot'>
        <IconDot />
      </button>
    </div>
  )
}

export default ButtonOption;