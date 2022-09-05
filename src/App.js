import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// ở react router dom v6 thì switch chuyển thành routes

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
