// import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './componenets/home';
import Login from './componenets/Login';
import NotFound from './componenets/notFound';
import SignUp from './componenets/SignUp';
import Popular from './componenets/Popular';
import UserHome from './componenets/UserHome';
import Categories from './componenets/Categories';
import Books from './componenets/Books';

function App() {
  const [token, setToken] = useState(JSON.stringify(localStorage.getItem("token")));


  const updateTokenHandler = (val) => {
    localStorage.setItem('token', val.token)
    setToken(val)
  }

  return (
    <div className="App ">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={token?<UserHome/>:<Home />} />
          {/* <Route path='/home' element={<Home popularBooks={popularBooks} />} /> */}
          <Route path='/categories' element={<Categories />} />
          <Route path='/books' element={<Books />} />
          <Route path='/login' element={
            <Login updateTokenHandler={updateTokenHandler}></Login>
          } />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
