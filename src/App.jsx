import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Insights from './components/Insights';
import backgroundImage from './assets/images/background.jpg';

function App() {
  return (
    <>
      <Header />
      <main
        className="flex-grow bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}

      >
        <Routes>
          <Route path="/" element={<><Slider /><Insights /></>} />
          <Route path="/post1" element={<Page1 />} />
          <Route path="/post2" element={<Page2 />} />
          <Route path="/post3" element={<Page3 />} />
          <Route path="/post4" element={<Page4 />} />
          <Route path="/post5" element={<Page5 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
