import { Workshop, Space, FAQItem, CommunityEvent } from './types';

export const workshops: Workshop[] = [
  {
    title: 'Digital Painting for Beginners',
    date: 'Setiap Sabtu, 10:00',
    category: 'Art',
    image: 'https://picsum.photos/seed/workshop1/400/300',
  },
  {
    title: 'Creative Writing Masterclass',
    date: '15 Juli 2024',
    category: 'Writing',
    image: 'https://picsum.photos/seed/workshop2/400/300',
  },
  {
    title: 'Build Your Personal Brand',
    date: '22 Juli 2024',
    category: 'Business',
    image: 'https://picsum.photos/seed/workshop3/400/300',
  },
  {
    title: 'Introduction to Pottery',
    date: 'Setiap Minggu, 13:00',
    category: 'Craft',
    image: 'https://picsum.photos/seed/workshop4/400/300',
  },
  {
    title: 'Smartphone Videography',
    date: '29 Juli 2024',
    category: 'Video',
    image: 'https://picsum.photos/seed/workshop5/400/300',
  },
  {
    title: 'Graphic Design Fundamentals',
    date: 'Setiap Jumat, 15:00',
    category: 'Design',
    image: 'https://picsum.photos/seed/workshop6/400/300',
  },
  {
    title: 'Public Speaking for Creatives',
    date: '5 Agustus 2024',
    category: 'Business',
    image: 'https://picsum.photos/seed/workshop7/400/300',
  },
  {
    title: 'Watercolor Essentials',
    date: 'Setiap Rabu, 18:00',
    category: 'Art',
    image: 'https://picsum.photos/seed/workshop8/400/300',
  }
];

export const spaces: Space[] = [
  {
    name: 'Main Hall',
    capacity: 'Kapasitas: 100 orang',
    image: 'https://picsum.photos/seed/space1/400/400',
  },
  {
    name: 'Workshop Room',
    capacity: 'Kapasitas: 25 orang',
    image: 'https://picsum.photos/seed/space2/400/400',
  },
  {
    name: 'Meeting Pod',
    capacity: 'Kapasitas: 8 orang',
    image: 'https://picsum.photos/seed/space3/400/400',
  },
];

export const communityEvents: CommunityEvent[] = [
    { image: 'https://picsum.photos/seed/comm1/400/500', title: 'Community Meetup' },
    { image: 'https://picsum.photos/seed/comm2/400/300', title: 'Art Exhibition' },
    { image: 'https://picsum.photos/seed/comm3/400/400', title: 'Startup Pitch Night' },
    { image: 'https://picsum.photos/seed/comm4/400/600', title: 'Live Music Session' },
    { image: 'https://picsum.photos/seed/comm5/400/350', title: 'Poetry Reading' },
    { image: 'https://picsum.photos/seed/comm6/400/450', title: 'Design Talk' },
];

export const faqs: FAQItem[] = [
  {
    question: 'Bagaimana cara mendaftar kelas?',
    answer: 'Anda dapat mendaftar kelas langsung melalui tombol "Daftar Sekarang" pada setiap jadwal kelas. Anda akan diarahkan ke halaman pendaftaran dan pembayaran.',
  },
  {
    question: 'Apa saja fasilitas yang termasuk dalam sewa ruang?',
    answer: 'Setiap penyewaan ruang sudah termasuk fasilitas standar seperti Wi-Fi berkecepatan tinggi, proyektor, sistem suara, dan kursi. Tim kami juga siap membantu kebutuhan teknis Anda.',
  },
  {
    question: 'Di mana lokasi Fortune Space?',
    answer: 'Kami berlokasi di pusat kota, di Jl. Kreatif No. 123, Jakarta. Lokasi kami sangat strategis dan mudah dijangkau dengan transportasi umum.',
  },
  {
    question: 'Apakah ada area parkir yang tersedia?',
    answer: 'Ya, kami memiliki area parkir yang luas dan aman untuk kendaraan roda dua maupun roda empat bagi semua pengunjung Fortune Space.',
  },
];