
import React from 'react';
import type { Event } from '../types';
import { ArrowRightIcon } from './Icons';


interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white shadow-lg rounded-2xl overflow-hidden group border border-[#E0D6FF]">
      <div className="p-6 relative">
        <div className="absolute top-4 right-4 bg-[#E0D6FF] text-[#1A1A2E] text-xs font-bold px-3 py-1 rounded-full -rotate-12">
          NEW EVENT
        </div>
        <p className="text-xs text-[#4A4A6A]">{event.date}</p>
        <h3 className="text-2xl font-bold text-[#1A1A2E] mt-2">{event.city}</h3>
        <p className="text-lg font-semibold text-[#1A1A2E]">{event.country}</p>
        <p className="text-sm text-[#4A4A6A] mt-1">{event.venue}</p>
      </div>
      <div className="h-64 overflow-hidden">
        <img src={event.image} alt={event.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <a href="#" className="flex items-center justify-between p-6 bg-[#E0D6FF] group-hover:bg-[#00F5A0] transition-colors duration-300">
        <span className="font-semibold text-[#1A1A2E]">BOOK NOW</span>
        <ArrowRightIcon className="w-5 h-5 text-[#1A1A2E]" />
      </a>
    </div>
  );
};

interface EventCardsProps {
  events: Event[];
}

export const EventCards: React.FC<EventCardsProps> = ({ events }) => {
  return (
    <section className="py-24 bg-[#F0F0F5]">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};