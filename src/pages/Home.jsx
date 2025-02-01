import React from 'react';
import Hero from '../components/Hero';
import FeatureDogs from '../components/FeatureDogs';
import AdoptionProcess from '../components/AdoptionProcess';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <div className="flex flex-col justify-center min-w-screen min-h-screen text-center">
      <Hero />
      <FeatureDogs />
      <AdoptionProcess />
      <FAQ />
    </div>
  );
}

export default Home;
