import images from './images';

const north = [
  {
    title: 'Butter Chicken',
    price: '$13.99',
    tags: 'NON-VEG | Main',
  },
  {
    title: 'Palak Paneer',
    price: '$11.99',
    tags: 'VEG | Main',
  },
  {
    title: 'Rogan Josh',
    price: '$15.99',
    tags: 'NON-VEG | Main',
  },
  {
    title: 'Vegetable Samosa',
    price: '$4.99',
    tags: 'VEG | Appetizer',
  },
  {
    title: 'Garlic Naan',
    price: '$2.99',
    tags: 'VEG | Bread',
  },
];

const south = [
  {
    title: 'Chicken Chettinad',
    price: '$14.99',
    tags: 'NON-VEG | Main',
  },
  {
    title: "Sambar Idli",
    price: '$9.99',
    tags: 'VEG | Main',
  },
  {
    title: 'Medu Vada',
    price: '$4.99',
    tags: 'VEG | Appetizer',
  },
  {
    title: 'Rava Dosa',
    price: '$8.99',
    tags: 'VEG | Dosas',
  },
  {
    title: 'Mysore Masala Dosa',
    price: '$9.99',
    tags: 'VEG | Dosas',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Culinary Excellence in Indian Desserts',
    subtitle: 'This award commends the restaurant`s mastery in creating indulgent and delectable Indian desserts.',
  },
  {
    imgUrl: images.award01,
    title: 'Best Indian Restaurant of the Year',
    subtitle: 'Recognized as the top Indian restaurant.',
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Customer Service',
    subtitle: 'This award acknowledges the restaurant`s exceptional hospitality, attentiveness, and personalized service that goes above and beyond to create a memorable dining experience for guests.',
  },
  {
    imgUrl: images.award03,
    title: 'Award-Winning Chef for Indian Cuisine',
    subtitle: 'This prestigious award honors the culinary talent and expertise of the restaurant`s chef',
  },
];

export default { north, south, awards };
