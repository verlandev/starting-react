import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import GenresButtons from "./components/GenresButtons/GenresButtons";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Books from "./Ressources/Books";


const {results} = Books;

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
       <GenresButtons />
      </main>

      <Footer />
    </div>
  );
};

export default App;

