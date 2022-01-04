export interface  Product {
  id: number;
  name: string;
  price:number;
  description: string;
}

export const products = [
  {
    id:1,
    name: 'Iphone XL',
    price: 699,
    description: 'This is Iphone XL with XL image display and extra ratina exposure.'
  },
  {
    id:2,
    name: 'Iphone X max',
    price: 999,
    description: 'This is Iphone max with X-ray image resoultion and extra ratina exposure.'
  },
  {
    id:3,
    name: 'Iphone XI rare',
    price: 899,
    description: 'This is Iphone XI rare with everything rare in it with rare ratina exposure.'
  },
  {
    id:4,
    name: 'Iphone XII',
    price: 1099,
    description: 'This is Iphone XII with Cinematic image display and extra ratina exposure.'
  },
  {
    id:1,
    name: 'Iphone XIII',
    price: 1299,
    description: 'This is Iphone XII with nothing speacial in this.'
  }
]
