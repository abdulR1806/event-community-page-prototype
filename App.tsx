import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { AboutUs } from './components/AboutUs';
import { Workshops } from './components/Workshops';
import { SpaceRental } from './components/SpaceRental';
import { Community } from './components/Community';
import { ContactFAQ } from './components/ContactFAQ';
import { Footer } from './components/Footer';
import { workshops, spaces, communityEvents, faqs } from './constants';

const App: React.FC = () => {
  const workshopTitles = workshops.map(w => w.title);

  return (
    <div className="bg-[#F0F0F5] text-[#1A1A2E] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Ticker items={workshopTitles} />
        <AboutUs />
        <Workshops workshops={workshops} />
        <SpaceRental spaces={spaces} />
        <Community events={communityEvents} />
        <ContactFAQ faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
};

export default App;