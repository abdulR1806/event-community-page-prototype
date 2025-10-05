
import React from 'react';

const topicsData = [
  {
    title: 'Content Creation',
    description: 'Understand Your Audience, Content Strategy, Storytelling, Copywriting, Editing, Shooting, Community Building, Influencer Collaboration, Podcasting Skills, Creativity Techniques, Self Branding and many more things.',
    image: 'https://picsum.photos/seed/topic1/800/600',
  },
  {
    title: 'Startups & Brands',
    description: 'Building a Brand, Scalability, Marketing Strategy, Time Management, Pivot Strategies, Company’s Values, Community Building & Collaborations.',
  },
  {
    title: 'Traditional Media & TV',
    description: 'Does Traditional media still exist? We will talk about the future of Radio, TV, Newspapers, and the movies industry.',
  },
  {
    title: 'Networking & Activations',
    description: 'Creator Summit brings the most interesting people together under one roof. This is your chance to network, create your next content piece, and collaborate with other creators. We promise you a fun-filled event and a memorable experience.',
  },
];

export const Topics: React.FC = () => {
  return (
    <section className="py-24 bg-[#1A1A2E] text-[#F0F0F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Topics</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {topicsData.map((topic, index) => (
            <div key={index} className="bg-[#25253A] border border-[#4A4A6A] rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{topic.title}</h3>
                <p className="text-[#A9A9B2] leading-relaxed">{topic.description}</p>
              </div>
              {topic.image && (
                <div className="flex-shrink-0 w-full md:w/3 h-48 md:h-full rounded-lg overflow-hidden">
                  <img src={topic.image} alt={topic.title} className="w-full h-full object-cover"/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};