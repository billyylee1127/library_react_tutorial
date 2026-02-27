import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data.js"
import BookInfo from "./pages/BookInfo.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/1" element={<BookInfo books={books} />} />
          {/* {<Route path="/books/.id" exact element={<BooksInfo books={books} />} />} */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
