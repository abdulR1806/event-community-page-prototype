
export interface Workshop {
  title: string;
  date: string;
  category: string;
  image: string;
}

export interface Space {
  name: string;
  capacity: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CommunityEvent {
  image: string;
  title: string;
}

// FIX: Added missing Event type definition.
export interface Event {
  date: string;
  city: string;
  country: string;
  venue: string;
  image: string;
}

// FIX: Added missing Speaker type definition.
export interface Speaker {
  image: string;
  name: string;
  title: string;
  followers: string;
}

// FIX: Added missing Testimonial type definition.
export interface Testimonial {
  image: string;
  name: string;
  handle: string;
  quote: string;
}

// FIX: Added missing SocialPost type definition.
export interface SocialPost {
  profileImage: string;
  accountName: string;
  followers: string;
  time: string;
  platform: 'youtube' | 'facebook' | 'google' | 'x';
  text?: string;
  image?: string;
  videoTitle?: string;
  videoViews?: string;
}
