import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import './App.scss';
import Gallery from './components/Gallery/Gallery';
import Picture from './components/Picture/Picture';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="App">
    <HashRouter>
      <Header/>  
      <Routes>
        <Route exact path="/" element={<Gallery/>}/>
        <Route exact path="/aboutme" element={<AboutMe/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="/gallery/:id" element={<Picture/>}/>
        <Route path="/*" element={<Gallery/>}/>
      </Routes>
    </HashRouter>
  </div>
);

export default App;
