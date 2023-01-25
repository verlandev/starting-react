import React, { useState } from "react";
import Books from "../../Ressources/Books";
import Gallery from "../Gallery/Gallery";
import "./GenresButtons.scss";

const GenresButtons = () => {
  const { results } = Books;

  const [changeGenre, setChangeGenre] = useState("Todos");

  return (
    <div>
      <div className="menu">
        <button
          onClick={() => setChangeGenre("fantasía")}
          className="button__genre"
        >
          Fantasía
        </button>
        <button className="button__genre">Aventuras</button>
        <button className="button__genre">Desarrollo Personal</button>
        <button className="button__genre">Novela Realista</button>
        <button
          onClick={() => setChangeGenre("novelaPoliciaca")}
          className="button__genre"
        >
          Novela Políciaca
        </button>
        <button className="button__genre">Teatro</button>
        <button className="button__genre">Poesía</button>
      </div>
      <section className="gallery__section">
        {changeGenre === "novelaPoliciaca"
          ? results
              .filter((result) => result.genre.includes("Novela policiaca"))
              .map((result) => <Gallery result={result} />)
          : changeGenre === "fantasía"
          ? results
              .filter((result) => result.genre.includes("Fantasía"))
              .map((result) => <Gallery result={result} />)
          : changeGenre === "Todos"
          ? results.map((result) => <Gallery result={result} />)
          : null}
      </section>
    </div>
  );
};

export default GenresButtons;
