import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Innovation from './components/Innovation';
import Impact from './components/Impact';
import Resources from './components/Resources';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Innovation />
        <Impact />
        <Resources />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;