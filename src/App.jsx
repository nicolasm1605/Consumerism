import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
