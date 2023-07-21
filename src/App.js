import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import PageFive from './Pages/PageFive';
import PageSix from './Pages/PageSix';
import PageSeven from './Pages/PageSeven';
import PageEight from './Pages/PageEight';
import PageNine from './Pages/PageNine';
import PageTen from './Pages/PageTen';
import PageEleven from './Pages/PageEleven';
import PageTwelve from './Pages/PageTwelve';

function App() {
  return (
    <BrowserRouter>
    <div className="Container">
      <div className='content'>
        <Routes>
          <Route path="/" element={<PageOne />}/>
          <Route path="/Login" element={<PageTwo />} />
          <Route path="/SignIn" element={<PageThree />} />
          <Route path="/About-us" element={<PageFour />} />
          <Route path="/FAQ" element={<PageFive />} />
          <Route path="/Search" element={<PageSix />}  />
          <Route path="/My-Space" element={<PageSeven />} />
          <Route path="My-Infos" element={<PageEight />} />
          <Route path="/Doctor-details" element={<PageNine />} />
          <Route path="/Appointement" element={<PageTen />} />
          <Route path="/Sign-In-Doc" element={<PageEleven />} /> 
          <Route  path="/Log-In-Doc" element={<PageTwelve />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
