import React from 'react';
import ReactDOM from 'react-dom';
import Landingpage from './Landingpage';
import Host from './Host';



function Home() {
  return (
    <>
   <Landingpage />
   <Host />
   </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default Home;