
import React from 'react';

const statsData = [
  { value: '120+', label: 'Speakers' },
  { value: '40+', label: 'Top-tier Talks' },
  { value: '160+', label: 'Advertisers' },
  { value: '170+', label: 'Affiliate Networks' },
  { value: '110+', label: 'Countries' },
  { value: '16,209+', label: 'Attendees' },
];

const StatCard: React.FC<{ value: string; label: string; className?: string }> = ({ value, label, className }) => {
  return (
    <div className={`bg-white border border-[#E0D6FF] p-8 rounded-2xl text-center shadow-md ${className}`}>
      <p className="text-4xl font-bold text-[#00F5A0]">{value}</p>
      <p className="text-[#4A4A6A] mt-2">{label}</p>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-[#F0F0F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          World's Top <span className="text-[#00F5A0]">Creators</span> Gathering
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};