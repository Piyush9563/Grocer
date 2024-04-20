// import { createContext, useContext, useReducer } from "react";
// import faker from "faker";
// import { cartReducer, productReducer } from "./Reducers";

// const Cart = createContext();
// faker.seed(99);

// const Context = ({ children }) => {
//   const products = [...Array(20)].map(() => ({
//     id: faker.datatype.uuid(),
//     name: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     image: faker.random.image(),
//     inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
//     fastDelivery: faker.datatype.boolean(),
//     ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
//   }));

//   const [state, dispatch] = useReducer(cartReducer, {
//     products: products,
//     cart: [],
//   });

//   const [productState, productDispatch] = useReducer(productReducer, {
//     byStock: false,
//     byFastDelivery: false,
//     byRating: 0,
//     searchQuery: "",
//   });

//   console.log(productState);

//   return (
//     <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
//       {children}
//     </Cart.Provider>
//   );
// };

// export const CartState = () => {
//   return useContext(Cart);
// };

// export default Context;




import { createContext, useContext, useReducer } from "react";
// Import faker if you still need to use it somewhere else in your project
// import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: '1',
      name: 'Amul Milk',
      price: '10.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcHsGLOW4Mv5xu-QkIvdnaJR7z7jhqrM0F8jOxfZL1g&s',
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: '2',
      name: 'Bread',
      price: '19.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnW2xjlOVdi7ljiKkiJX6yIhFvDDZQ3ogxi5l-4PoQ-Q&s',
      inStock: 3,
      fastDelivery: false,
      ratings: 3,
    },
    {
      id: '3',
      name: 'Eggs',
      price: '29.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqVe8cy2D3TSLc1m8RsyKzLxuJjESWqNkxt5Kqq-U_g&s',
      inStock: 7,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: '4',
      name: 'Product 4',
      price: '15.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HZYc1LWjX6RQpimvYJH-azE5OKB6BshNinJ0YFh0lg&s',
      inStock: 0,
      fastDelivery: true,
      ratings: 2,
    },
    {
      id: '5',
      name: 'BounVita',
      price: '24.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LIqZAgDZoa8NVRnv64xezEzq201DHBj7DEQyIh9Uqg&s',
      inStock: 6,
      fastDelivery: false,
      ratings: 1,
    },
    {
      id: '6',
      name: 'Shampoo',
      price: '199.99',
      image: 'https://m.media-amazon.com/images/I/61ZrPaeTcfL.jpg',
      inStock: 6,
      fastDelivery: false,
      ratings: 1,
    },
    {
      id: '7',
      name: 'CocaCola ',
      price: '80',
      image: 'https://www.bigbasket.com/media/uploads/p/xxl/251023_11-coca-cola-soft-drink-original-taste.jpg',
      inStock: 6,
      fastDelivery: false,
      ratings: 1,
    },
    {
      id: '8',
      name: 'Condensed Milk',
      price: '200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxynTFOg4Ek2UZ41CN1d7OAhN-VhESXlLzzzyeJ50nMg&s',
      inStock: 6,
      fastDelivery: false,
      ratings: 1,
    },
    {
      id: '9',
      name: 'Maggi',
      price: '25',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40237235_3-maggi-2-minute-instant-noodles-veggie-masala-made-with-quality-spices-rich-in-fibre.jpg',
      inStock: 6,
      fastDelivery: false,
      ratings: 1,
    },
    {
      id: '9',
      name: 'ToothPAste',
      price: '90',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkp9mV0EIEQVfYhSGFpjUhB6OwEniIyzVu7y0RKhrnrw&s',
      inStock: 6,
      fastDelivery: false,
      ratings: 1,
    },
    // Add more products here
  ];

  // If you're not using faker.js anywhere else, you can remove the import and this line
  // faker.seed(99);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

