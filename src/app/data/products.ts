export const productData = [
  {
    id: 1,
    name: 'iPhone 14',
    price: 1250,
    description: 'Apple\'s newest phone with a fantastic camera'
  },
  {
    id: 2,
    name: 'Galaxy Flip',
    price: 600,
    description: ''
  },
  {
    id: 3,
    name: 'Google Pixel 7 Plus',
    price: 800,
    description: 'A phone that can dynamically edit photos'
  }
]

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}


