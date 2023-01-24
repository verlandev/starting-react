import React from "react";
import "./Gallery.scss";

const Gallery = ({img, title, author, genre}) => {

    return (
        <div className="gallery">
            <img className="gallery__img" src={img} alt="Harry Potter book"></img>
            <h3 className="gallery__h3">{title}</h3>
            <h4 className="gallery__h4">{author}</h4>
            <p className="gallery__p">{genre}</p>
        </div>
    )
}


export default Gallery