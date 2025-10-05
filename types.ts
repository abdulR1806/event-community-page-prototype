
export interface Event {
  city: string;
  country: string;
  date: string;
  venue: string;
  image: string;
}

export interface Speaker {
  name: string;
  title: string;
  followers: string;
  image: string;
}

export interface Testimonial {
  name: string;
  handle: string;
  quote: string;
  image: string;
}

export interface SocialPost {
  platform: 'youtube' | 'facebook' | 'google' | 'x';
  accountName: string;
  followers: string;
  time: string;
  text?: string;
  image?: string;
  videoViews?: string;
  videoTitle?: string;
  profileImage: string;
}
