// import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componenets/header';
import Login from './componenets/Login';
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
      <Route path='/' element={
        <Login updateTokenHandler={updateTokenHandler}></Login>
      }/>
      <Route path='/home' element={<Header/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>






      {/* <SignUp></SignUp> */}
      {/* <Login updateTokenHandler={updateTokenHandler}></Login> */}
      {/* <Header></Header> */}
     </div>
  );
}

export default App;
