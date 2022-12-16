import React from 'react';


const Search:React.FC = () => {
  return (
   
    <form action="#" method="get" className="search" >
      <label htmlFor="header-search">
          <span className="visually-hidden"></span>
      </label>
      <div>
        <button className='btn search__btn-back'>
          <svg className="w-6 h-6"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
          </svg>
        </button>

        <button className='btn search__btn-forward'>
          <svg className="w-6 h-6"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>

      </div>

      <div className='search__container'>
        <button className='btn search__button' type="submit">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
            <title>magnifying-glass</title>
            <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
          </svg>

        </button>

        <input
            type="text"
            id="header-search"
            placeholder="Tìm kiếm bài hát tên bài hát..."
            name='s'
            className="search__input" 
        />
          

      </div>
    </form>
   
  )
}

export default Search;