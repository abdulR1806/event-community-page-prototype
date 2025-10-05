import { Event, Speaker, Testimonial, SocialPost } from './types';

export const eventLocations: Event[] = [
  {
    city: 'Jakarta',
    country: 'Indonesia',
    date: '12 June 2024',
    venue: 'Madinat Jumeirah',
    image: 'https://picsum.photos/seed/jakarta/400/600'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    date: '12 June 2024',
    venue: 'Leonardo Royal Hotel & Tower Bridge',
    image: 'https://picsum.photos/seed/london/400/600'
  },
  {
    city: 'New York',
    country: 'USA',
    date: '12 June 2024',
    venue: 'Hilton Tel NY',
    image: 'https://picsum.photos/seed/newyork/400/600'
  },
    {
    city: 'Tokyo',
    country: 'Japan',
    date: '15 July 2024',
    venue: 'Tokyo International Forum',
    image: 'https://picsum.photos/seed/tokyo/400/600'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    date: '20 August 2024',
    venue: 'Suntec City',
    image: 'https://picsum.photos/seed/singapore/400/600'
  },
  {
    city: 'Bangalore',
    country: 'India',
    date: '05 September 2024',
    venue: 'BIEC',
    image: 'https://picsum.photos/seed/bangalore/400/600'
  },
  {
    city: 'Dubai',
    country: 'UAE',
    date: '18 October 2024',
    venue: 'Dubai World Trade Centre',
    image: 'https://picsum.photos/seed/dubai/400/600'
  },
  {
    city: 'Los Angeles',
    country: 'USA',
    date: '10 November 2024',
    venue: 'LA Convention Center',
    image: 'https://picsum.photos/seed/losangeles/400/600'
  },
];

export const tickerItems = ['BUY TICKETS', 'MONGOLIA', 'LOS ANGELES', 'BANGALORE', 'SINGAPORE'];

export const speakers: Speaker[] = [
    { name: 'Jordan Matter', title: 'Most Successful "Old" YouTuber In The World', followers: '5M', image: 'https://picsum.photos/seed/jordan/400/400' },
    { name: 'Alex Hormozi', title: 'Founder of Acquisition.com', followers: '2.5M', image: 'https://picsum.photos/seed/alex/400/400' },
    { name: 'Casey Neistat', title: 'Filmmaker & YouTube Pioneer', followers: '12M', image: 'https://picsum.photos/seed/casey/400/400' },
    { name: 'Sara Dietschy', title: 'Creative Tech YouTuber', followers: '900k', image: 'https://picsum.photos/seed/sara/400/400' },
    { name: 'MKBHD', title: 'Tech Reviewer & YouTuber', followers: '18M', image: 'https://picsum.photos/seed/mkbhd/400/400' },
    { name: 'Emma Chamberlain', title: 'Lifestyle Vlogger & Entrepreneur', followers: '12M', image: 'https://picsum.photos/seed/emma/400/400' },
    { name: 'MrBeast', title: 'Philanthropist & YouTube Megastar', followers: '250M', image: 'https://picsum.photos/seed/mrbeast/400/400' },
    { name: 'Lilly Singh', title: 'Comedian & Entertainer', followers: '14M', image: 'https://picsum.photos/seed/lilly/400/400' },
];

export const testimonials: Testimonial[] = [
    { name: 'Tsu Beeu', handle: '@tsu_beeu', quote: 'It was so worth flying form NYC! Had a lot of fun and was the best conference that I\'ve ever attended! thanks you for making it happen!!', image: 'https://picsum.photos/seed/tsu/200/200' },
    { name: 'Hiral Nagori', handle: '@Hiral_nagori', quote: 'This is has to be one of the best event ive been a part of! what a power packed community! so happy to spot myself in the very beginning of the video', image: 'https://picsum.photos/seed/hiral/200/200' },
    { name: 'Martina', handle: '@martina', quote: 'Nas summit it all about creating a community of like-minded people to make a posting impact.', image: 'https://picsum.photos/seed/martina/200/200' },
    { name: 'John Doe', handle: '@johndoe', quote: 'An incredible gathering of talent and inspiration. I learned so much and connected with amazing people.', image: 'https://picsum.photos/seed/john/200/200' },
    { name: 'David Chen', handle: '@davidchen', quote: 'Absolutely mind-blowing event. The energy, the speakers, the community... everything was top-notch. Can\'t wait for the next one!', image: 'https://picsum.photos/seed/david/200/200' },
    { name: 'Priya Sharma', handle: '@priyacreates', quote: 'I met so many of my creator heroes and learned practical skills that I\'m already applying to my channel. A must-attend for any serious creator.', image: 'https://picsum.photos/seed/priya/200/200' },
    { name: 'Ben Carter', handle: '@bencarter', quote: 'The networking opportunities alone were worth the ticket price. I walked away with three new collaboration partners and a ton of inspiration.', image: 'https://picsum.photos/seed/ben/200/200' },
    { name: 'Sophia Lee', handle: '@sophia', quote: 'As an aspiring entrepreneur in the creator economy, this summit was a goldmine of information and connections. Highly recommended!', image: 'https://picsum.photos/seed/sophia/200/200' },
];

export const socialPosts: SocialPost[] = [
    { platform: 'google', accountName: 'CREATORSUMMIT', followers: '2,684 FOLLOWERS', time: '31/05/2024', text: 'Nas summit it all about creating a community of like-minded people to make a posting impact.', profileImage: 'https://picsum.photos/seed/profile1/100/100', image: 'https://picsum.photos/seed/social1/400/300' },
    { platform: 'x', accountName: 'CREATORSUMMIT', followers: '2,684 FOLLOWERS', time: '4mo', text: 'We\'d like to take a moment to thank all our sponsors, speakers and attendees for making the Mongolia Summit an absolute success!', profileImage: 'https://picsum.photos/seed/profile2/100/100' },
    { platform: 'facebook', accountName: 'CREATORSUMMIT', followers: '2,684 FOLLOWERS', time: '4mo', text: 'Our favorite Ming Wei is joining the 2024 Summit!! If you don’t want to miss the opportunity to meet him, apply now! #creatorsummit2024 #creatoreconomy', profileImage: 'https://picsum.photos/seed/profile3/100/100', image: 'https://picsum.photos/seed/social3/400/500' },
    { platform: 'youtube', accountName: 'CREATORSUMMIT', followers: '2,684 FOLLOWERS', time: '8 days ago', videoViews: '280 views', videoTitle: "CEO'S SECRET TO TRANSFORMING LIVES", profileImage: 'https://picsum.photos/seed/profile4/100/100', image: 'https://picsum.photos/seed/social4/400/600' },
];