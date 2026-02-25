import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
// import BooksInfo from "./pages/BookInfo.jsx";
import { books } from "./data.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact render={<Books books={books} />} />
          {/* <Route path="/books/.id" exact element={<BookInfo books={books} />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
