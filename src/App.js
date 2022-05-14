// import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componenets/home';
import Login from './componenets/Login';
import NotFound from './componenets/notFound';
import SignUp from './componenets/SignUp';

function App() {
  const [token, setToken] = useState(JSON.stringify(localStorage.getItem("token")));

  const updateTokenHandler = (val)=>{
    localStorage.setItem('token', val.token)
    setToken(val)
  }

  return (
    <div className="App container">

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={
        <Login updateTokenHandler={updateTokenHandler}></Login>
      }/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>

     </div>
  );
}

export default App;
