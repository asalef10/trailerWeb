import './App.css';
import LayOut from './component/Fetchers/LayOut';
import AppRouter from './Router/Router';
import { BrowserRouter as Router,} from 'react-router-dom';
import { MyProvider } from './UseContext/UseContext';
import { useState } from 'react';
function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <>
      <MyProvider value={{isLogIn,setIsLogIn}}>
      <Router>
        <LayOut>          
          <AppRouter />
        </LayOut>
      </Router>
      </MyProvider>
    </>
  );
}

export default App;
