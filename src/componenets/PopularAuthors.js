import React from 'react'

export default function PopularAuthors({ author, isFirst }) {
    if (isFirst) {
        return (
            <>
                <div className="carousel-item active">
                    <div className="card" style={{ width: "100%", marginBottom:"6%" }}>
                        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{author.firstName} {author.lastName}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> Date of birth : {author.dateOfBirth}</li>
                            {/* <li className="list-group-item">{author.firstName}</li>
                        <li className="list-group-item">A third item</li> */}
                        </ul>
                        {/* <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div> */}
                    </div></div>
            </>
        )
    }
    return (
        <>
            <div className="carousel-item">
                <div className="card" style={{ width: "100%", marginBottom:"6%" }}>
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{author.firstName} {author.lastName}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> Date of birth : {author.dateOfBirth}</li>
                        {/* <li className="list-group-item">{author.firstName}</li>
                        <li className="list-group-item">A third item</li> */}
                    </ul>
                    {/* <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div> */}
                </div>
            </div>
        </>
    )
}
