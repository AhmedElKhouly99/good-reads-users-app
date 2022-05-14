import React, { useEffect } from "react";
import Header from './header';
import Popular from "./Popular";
import { useState } from 'react';
import axios from 'axios';

function Home() {
    // const [popularBooks, setPopBooks] = useState([]);
    //     let ok = false;
    //     if(popularBooks !=[]){
    //         console.log(popularBooks)
    //         ok= true;
    //     }
    //    useEffect(()=>{ 
    //        axios.get("https://good-reads-server.herokuapp.com/user/books/popular")
    //       .then(function (response) {
    //         console.log(response.data.popularBooks);
    //         setPopBooks(response.data.popularBooks)
           
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       })
    //        },[])
    //        console.log(ok)
    //       if(ok===true){
        return (<>
        
            
                {/* <div></div> */}
                    <Header />
                    {/* <Popular popularBooks={popularBooks}/> */}
                    <Popular/>
                {/* </div> */}
               
            
        
        </>)
        // }
        
        //     return ( <h1> loading...</h1>)
        
      
    
    

}

export default Home;