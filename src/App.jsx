
import './App.css';

import { Route, Routes } from 'react-router-dom';

//*Components
import Navbar from './components/nav-bar/nav-bar.component';

//*Pages
import Account from './pages/account/account.route';
import SignUp from './pages/sing-up/sing-up.route';
import Login from './pages/login/login.route';
import Home from './pages/home/home.route';

const App = () => {


  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' index element= {<Home/>} />
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </>
  )
}

export default App
