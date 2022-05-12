import { v4 as uuidv4 } from 'uuid';

export const books = [
  {
    id: uuidv4(),
    title: 'unlimited power',
    author: 'Tony Robins',
    category: 'Science fiction',
    completion: 89,
  },
  {
    id: uuidv4(),
    title: 'Atomic Habits',
    author: 'idk the author name',
    category: 'Action',
    completion: 9,
  },
  {
    id: uuidv4(),
    title: 'Higher dimensions',
    author: 'Hadi Jafari',
    category: 'Economy',
    completion: 10,
  },
  {
    id: uuidv4(),
    title: 'unified theory',
    author: 'Hadi',
    category: 'Physics',
    completion: 100,
  },
];

export const categories = [];
