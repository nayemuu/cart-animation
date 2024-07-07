import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <aside style={{ display: "none" }} id="js-banner" className="banner">
        <div className="banner__inner">
          This browser currently doesn't support View Transitions API. Use
          Chrome 111 or newer version to view the example.
        </div>
      </aside>
      <Header />
      <main>
        <article>
          <p className="breadcrumbs">
            Home / The Army Painter / <strong>Warpaints</strong>
          </p>
          <h2 className="category">WARPAINTS</h2>
        </article>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
