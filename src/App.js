import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import BooksShop from "./component/booksShop/BooksShop";
import Categories from "./pages/categories/Categories";
import Recent from "./pages/recent/Recent";
import Books from "./pages/books/Books";
import AboutUs from "./pages/aboutUs/AboutUs";
import Section from "./component/section/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Routes>
        <Route path="/" element={<BooksShop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/books" element={<Books />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
