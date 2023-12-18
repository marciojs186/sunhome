import React from "react";

import styles from "./App.module.scss";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main className={styles.main}>
          <header>
            <h2>Conteúdo...</h2>
          </header>
          <div>
            <h3>Thema...</h3>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
