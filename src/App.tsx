import React from 'react';
import Search from './components/search';
import SideBar from './components/side-bar';



const  App: React.FC = () =>  {
  return (
    <div>
      <SideBar />
      <Search />
    </div>
  );
}

export default App;
