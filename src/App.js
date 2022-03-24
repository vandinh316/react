import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./pages/GlobalStyles";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import TodoPage from "./pages/Todo";
import FetchApi from "./pages/FetchApi";
import Mp3 from "./pages/Mp3";

import "./App.css";
// import logo from "./logo.svg";
import "./assets/scss/Common.module.scss";

function App() {
  return (
    <GlobalStyles>
      <div className="App">
        <Header />

        <main className="site-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/fetch" element={<FetchApi />} />
              <Route path="/mp3" element={<Mp3 />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </GlobalStyles>
  );
}

export default App;
