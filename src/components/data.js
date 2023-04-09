import tour1 from '../img/tour-1.jpeg'
import tour2 from '../img/tour-2.jpeg'
import tour3 from '../img/tour-3.jpeg'
import tour4 from '../img/tour-4.jpeg'
import tour5 from '../img/tour-5.jpeg'
import tour6 from '../img/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Explore the world without breaking the bank with our money-saving services.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless adventures',
    text: 'Embark on an adventure of a lifetime and explore breathtaking landscapes.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Indulge in luxurious comfort on your next trip with our specialized services. ',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th 2023',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum eum nulla harum expedita provident numquam ex vero sint atque quis.',
    location: 'Tibet',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'september 14th 2023',
    title: 'Best Of Java',
    text: 'A trip to Java promises a mix of cultural, historical, and natural attractions. Explore ancient temples, hike volcanoes, and indulge in delicious cuisine while soaking up the islands vibrant atmosphere.',
    location: 'Indonesia',
    duration: 14,
    price: 2600,
  },
  {
    id: 3,
    image: tour3,
    date: 'october 10th 2023',
    title: 'Explore Hong Kong',
    text: 'A holiday in Hong Kong offers an exciting blend of modern city life and traditional Chinese culture. Enjoy the bustling streets, delicious cuisine, shopping, and impressive skyline views.',
    location: 'Hong Kong',
    duration: 8,
    price: 4200,
  },
  {
    id: 4,
    image: tour4,
    date: 'mau 24th 2023',
    title: 'Kenya Highlights',
    text: 'A trip to Kenya offers the chance to witness incredible wildlife, stunning landscapes, and rich cultures. Embark on a safari, visit Maasai Mara, and discover the countrys fascinating history.',
    location: 'Kenya',
    duration: 26,
    price: 3500,
  },
  {
    id: 5,
    image: tour5,
    date: 'june 30th 2023',
    title: 'Wildlife Adventure',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum eum nulla harum expedita provident numquam ex vero sint atque quis.',
    location: 'Tanzania',
    duration: 8,
    price: 3000,
  },
  {
    id: 6,
    image: tour6,
    date: 'december 16th 2023',
    title: 'Saraswati',
    text: 'Visit the Saraswati Temple in Uttar Pradesh for a glimpse of the awe-inspiring statue of the goddess Saraswati, revered in Hindu mythology as the goddess of knowledge, music, and art. ',
    location: 'India',
    duration: 24,
    price: 5600,
  },
]
