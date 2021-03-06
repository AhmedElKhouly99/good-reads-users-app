import React, { useEffect, useState } from 'react'
import PopularBooks from './PopularBooks';
import axios from 'axios'
import PopularAuthors from './PopularAuthors';

export default function Popular() {

    const [popularBooks, setPopBooks] = useState([]);
    const [popularAuthors, setPopAuthors] = useState([]);
    const [popularCat, setPopCat] = useState([]);

    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/books/popular")
            .then(function (response) {
                console.log(response.data.popularBooks);
                setPopBooks(response.data.popularBooks)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])



    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/authors")
            .then(function (response) {
                console.log(response.data);
                setPopAuthors(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/categories")
            .then(function (response) {
                console.log(response.data);
                setPopCat(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    if (popularBooks !== [] && popularAuthors !== [] && popularCat !== []) {
        return (
            <>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ width: "30%" }}>

                    <div class="carousel-indicators">
                        <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>




                    <div className="carousel-inner">
                        {
                            popularBooks.map((book) => {
                                console.log(book)
                                return (
                                    <PopularBooks book={book} isFirst={popularBooks[0] === book ? true : false} />
                                )
                            })
                        }

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>



                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{ width: "30%" }}>
                    <div class="carousel-indicators">
                        <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">

                        {
                            popularAuthors.map((author) => {
                                console.log(author)
                                return (
                                    <PopularAuthors author={author} isFirst={popularAuthors[0] === author ? true : false} />
                                )
                            })
                        }



                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">
                        Popular Categories
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            popularCat.map((cat) => {
                                console.log(cat)
                                return (
                                    <li className="list-group-item">{cat.name}</li>
                                )
                            })
                        }

                    </ul>
                </div>


            </>





        )
    } else
        return (<h1> loading...</h1>)
}

