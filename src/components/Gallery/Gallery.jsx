import React from "react";
import "./Gallery.scss";


const Gallery = ({ result }) => {
  
  console.log(result);
  const {image, title, author, genre} = result; 
  
  

  return (
    
    <div className="gallery">
        <img className="gallery__img" src={image} alt="book"></img>
        <h3 className="gallery__h3">{title}</h3>
        <h4 className="gallery__h4">{author}</h4>
        <p className="gallery__p">{genre}</p>
        {/* {genre === "Novela políciaca" ? (<p>Soy la novela de Agatha Christie</p>
        ) : genre === "Fantasía"} */}
      </div>
  );
};

export default Gallery;
