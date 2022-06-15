import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home } from './screens';
import { useEagerConnect, useInactiveListener } from './hooks/useEagerConnect';
import GlobalState from './Context';
function App() {
  const [errorMessage, setErrorMessage] = useState();
  useEagerConnect(setErrorMessage);
  useInactiveListener();
  const [isShow, setIsShow] = useState(false)

  return (
    <GlobalState.Provider value={{isShow:isShow,setIsShow:setIsShow}}>

      <div className="App">
        {
          errorMessage ? <div style={{ color: "red" }}>{errorMessage}</div> : null
        }
        <BrowserRouter>
          <Header setErrorMessage={setErrorMessage} />
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
