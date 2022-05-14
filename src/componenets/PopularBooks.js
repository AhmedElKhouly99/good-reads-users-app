import React, { useState } from 'react'

export default function PopularBooks({ book, isFirst }) {
    if (isFirst) {
        return (
            <div className="carousel-item active">
                <div className="card" style={{ width: "100%", marginBottom:"6%" }}>
                    <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            {book.name}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="carousel-item">
            <div className="card" style={{ width: "100%", marginBottom:"6%"  }}>
                <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        {book.name}
                    </p>
                </div>
            </div>
        </div>
    )

}
