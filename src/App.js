import './App.css';
import Home from './Pages/Home';
import Place from './Pages/Place';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Connect from './Components/Connect';

import Inspiration from './Pages/Inspiration'
import Nft from './Pages/Nft'
import Footer from './Pages/Footer';
import { createContext , useState} from 'react';


export const AppContext = createContext(null);
function App() {
  const [showWallet, setshowWallet] = useState(false);
  return (
    <div>
      <AppContext.Provider value={{showWallet, setshowWallet}}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/place' element={<Place />} />
        </Routes>
      </Router></AppContext.Provider>


     
          

      

    </div>
  );
}

export default App;
