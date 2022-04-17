import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Image from './components/Gallery/Picture';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <HashRouter>
  <Header/>  
  <Routes>
      <Route exact path='/' element={<Gallery/>}/>
      <Route exact path="/aboutme" element={<AboutMe/>}/>
      <Route exact path="/gallery" element={<Gallery/>}/>
      <Route exact path="/gallery/:id" element={<Image/>}/>
      <Route path="*" element={<Gallery/>}/>
      </Routes>
    </HashRouter>
  );
}
export default App;
