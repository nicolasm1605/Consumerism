import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './pages/page1';
import Page2 from './pages/Page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
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
