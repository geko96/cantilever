
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Components/Router/Router';
import { Provider } from './Components/Context/Context';
import { useState } from 'react';

function App() {
  const [loged, setLoged] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);

  let contextValue = {
    loged,
    setLoged,
    user,
    setUser,
    token,
    setToken,
    cart,
    setCart
  }

  


  return (
    <>
    <Provider value={contextValue}>
      <Router />
    </Provider>
    </>
  );
}

export default App;
