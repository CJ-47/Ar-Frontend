
import './App.css';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Form  from "./pages/Form";
import Navbar from './pages/Navbar';
function App() {
  return (
    <div className='App'>
    <Router>
    
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route
                    path="/Form"
                    element={<Form />}
                />
            </Routes>
        </Router>
        </div>
  );
}

export default App;
