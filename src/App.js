import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home } from './screens';

import GlobalState from './Context';
function App() {
 
  const [isShow, setIsShow] = useState(false)
  return (
    <GlobalState.Provider value={{isShow:isShow,setIsShow:setIsShow}}>
{/* if (navigator.userAgent.indexOf('Mac OS X') != -1) { */}
      <div className={"App " +(window.navigator.userAgent.indexOf('Mac OS X') != -1 ? "mac" : "pc")}>
        {/* {
          errorMessage ? <div style={{ color: "red" }}>{errorMessage}</div> : null
        } */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
        <div className={`sidebar-overlay ${isShow == true ? 'active' : ''}`} onClick={(e) => setIsShow(false)}></div>
      </div>
    </GlobalState.Provider>
  );
}

export default App;
