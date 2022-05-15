import React, { useState, useEffect } from 'react'
import Header from './header'
import axios from 'axios'

export default function () {
    const [cats, setCats] = useState([])
    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/categories")
            .then(function (response) {
                console.log(response.data);
                setCats(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    return (
        <>
            <Header />
            <div className="cats container row d-flex justify-content-center">

                {
                    cats.map((cat) => {
                        return (
                            <div className="cats col-sm-3" key={cat._id}>
                                <div className="card">
                                    <div class="card-body">
                                        <h5 className="card-title">{cat.name}</h5>
                                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                        <a id={cat._id} href="#" className="btn btn-primary">Books</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }





            </div>
        </>

    )
}
