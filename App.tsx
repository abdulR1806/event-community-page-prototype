
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventCards } from './components/EventCards';
import { Ticker } from './components/Ticker';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Topics } from './components/Topics';
import { CommunityCTA } from './components/CommunityCTA';
import { Highlights } from './components/Highlights';
import { Speakers } from './components/Speakers';
import { RecapVideo } from './components/RecapVideo';
import { WhoYouWillMeet } from './components/WhoYouWillMeet';
import { Testimonials } from './components/Testimonials';
import { SocialFeed } from './components/SocialFeed';
import { SponsorCTA } from './components/SponsorCTA';
import { Footer } from './components/Footer';
import { eventLocations, tickerItems, testimonials, socialPosts, speakers } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-[#F0F0F5] text-[#1A1A2E] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <EventCards events={eventLocations} />
        <Ticker items={tickerItems} />
        <Stats />
        <About />
        <Topics />
        <CommunityCTA />
        <Highlights />
        <Speakers speakers={speakers}/>
        <RecapVideo />
        <WhoYouWillMeet />
        <Testimonials testimonials={testimonials} />
        <Ticker items={tickerItems} />
        <SocialFeed posts={socialPosts} />
        <SponsorCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;