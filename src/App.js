import React from 'react'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Development from './component/Development';
import NewsLetter from './component/NewsLetter';
import Card from './component/Card';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Development />
      <NewsLetter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
