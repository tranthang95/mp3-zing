import React from 'react';
import IconBack from '../../icons/icon-back';
import IconForward from '../../icons/icon-forward';
import IconMagnifying from '../../icons/icon-magnifying-glass';


const Search:React.FC = () => {
  return (
   
    <form action="#" method="get" className="search" >
      <label htmlFor="header-search">
          <span className="visually-hidden"></span>
      </label>
      <div>
        <IconBack />
        <IconForward />
      </div>

      <button className='btn search__button' type="submit">
        <IconMagnifying />
      </button>

      <input
          type="text"
          id="header-search"
          placeholder="Tìm kiếm bài hát tên bài hát..."
          name='s'
          className="search__input" 
      />
    </form>
   
  )
}

export default Search;