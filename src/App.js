
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Courses from './Components/Courses';


function App() {

  return (
    <>

    <Router>
    <Navbar title="Skill-Up"/>
    <Routes>
          <Route exact path="/" element={<Home/> }/>
          <Route exact path="/home" element={<Home/> }/>
          <Route exact path="/courses" element={<Courses/>}/>
    </Routes>
    <Footer year="2023"/>
    </Router>
    </>

  );
}

export default App;
