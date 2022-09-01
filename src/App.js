import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Maincontent from './Components/Maincontent';


  function App() {
  return(
    <React.StrictMode>
    <Maincontent  />
  </React.StrictMode>
  )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
