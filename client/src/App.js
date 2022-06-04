// Page
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";

// Layout
import Navbar from "./components/layouts/Navbar";

import {Routes , Route} from 'react-router-dom'
// pages admin
import HomeAdmin from "./components/pages/admin/Home"

// pages user
import HomeUser from "./components/pages/user/Home"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>



        <Route path='/admin/index' element={<HomeAdmin/>}/>
        
        <Route path='/user/index' element={<HomeUser/>}/>





      </Routes>
    </div>
  );
}

export default App;
