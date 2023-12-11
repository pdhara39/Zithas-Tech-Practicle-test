import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './components/Navbarcomp';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
// import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbarcomp />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   
      {/* <Home/> */}
    
    </BrowserRouter>
    
  );
}

export default App;
