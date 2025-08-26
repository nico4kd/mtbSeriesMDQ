import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Sponsors from './components/Sponsors';
import Comments from './components/Comments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <Sponsors />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;