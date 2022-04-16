
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Gallery from './Gallery/Gallery';
import Image from './Gallery/Image';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <BrowserRouter>
  <Header/>  
  <Routes>
      <Route path='/' element={<Gallery/>}/>
      <Route exact path="/aboutme" element={<AboutMe/>}/>
      <Route exact path="/gallery" element={<Gallery/>}/>
      <Route exact path="/gallery/:id" element={<Image/>}/>
      <Route exact path="*" element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
