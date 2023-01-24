import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";

import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Gallery
          img="https://imagessl4.casadellibro.com/a/l/t7/04/9788418173004.jpg"
          title="Harry Potter y la piedra filosofal"
          author="J.K Rowling"
          genre="Fantástico"
        />
        <Gallery
          img="https://imagessl7.casadellibro.com/a/l/t7/27/9788418173127.jpg"
          title="Harry Potter y la cámara secreta"
          author="J.K Rowling"
          genre="Fantástico"
        />
        <Gallery
          img="https://imagessl8.casadellibro.com/a/l/t7/28/9788418173028.jpg"
          title="Harry Potter y el prisionero de Azkaban"
          author="J.K Rowling"
          genre="Fantástico"
        />
        <Gallery
          img="https://imagessl0.casadellibro.com/a/l/t7/10/9788418173110.jpg"
          title="Harry Potter y el cáliz del fuego"
          author="J.K Rowling"
          genre="Fantástico"
        />
        <Gallery
          img="https://imagessl1.casadellibro.com/a/l/t7/41/9788418173141.jpg"
          title="Harry Potter y la orden del Fénix"
          author="J.K Rowling"
          genre="Fantástico"
        />
        <Gallery
          img="https://imagessl8.casadellibro.com/a/l/t7/58/9788418173158.jpg"
          title="Harry Potter y el misterio del príncipe"
          author="J.K Rowling"
          genre="Fantástico"
        />
        <Gallery
          img="https://imagessl4.casadellibro.com/a/l/t7/34/9788418173134.jpg"
          title="Harry Potter y las reliquias de la muerte"
          author="J.K Rowling"
          genre="Fantástico"
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
