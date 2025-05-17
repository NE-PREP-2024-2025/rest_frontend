import {type cartItems, type Product } from "@/types";

export const products: Product[] = [
  {
    id:1,
    name: "HAVIT HV-G92 Gamepad",

    price: 120,
   
    rateNumber: 88,
    rating: 5,
    image:"/images/products/red_joystick.png"
  },
  {
    id:2,
    name: "AK-900 Wired Keyboard",
   
    price: 960,
    
    rateNumber: 75,
    rating: 4,
    image:"/images/products/keyboard.png"
  },
  {
    id:3,
    name: "HAVIT HV-G92 Gamepad",

    price: 120,
   
    rateNumber: 88,
    rating: 5,
    image:"/images/products/red_joystick.png"
  },
  {
    id:4,
    name: "AK-900 Wired Keyboard",   
    price: 960,
    
    rateNumber: 75,
    rating: 4,
    image:"/images/products/keyboard.png"
  },
  {
    id:5,
    name: "HAVIT HV-G92 Gamepad",

    price: 120,
   
    rateNumber: 88,
    rating: 5,
    image:"/images/products/red_joystick.png"
  },
  {
    id:6,
    name: "AK-900 Wired Keyboard",
    price: 960,
    rateNumber: 75,
    rating: 4,
    image:"/images/products/keyboard.png"
  }
]

export const categoryProducts: Product[] = [
  {
    id:1,
    name: "HAVIT HV-G92 Gamepad",

    price: 120,
   
    rateNumber: 88,
    category:"gaming",
    rating: 5,
    image:"/images/products/red_joystick.png"
  },
  {
    id:2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    
    category:"gaming",
    rateNumber: 75,
    rating: 4,
    image:"/images/products/keyboard.png"
  },
  {
    id:3,
    name: "RGB liquid CPU Cooler",

    price: 120,
   
    category:"gaming",
    rateNumber: 88,
    rating: 5,
    image:"/images/products/gpu.png"
  },
  {
    id:4,
    name: "Small BookSelf",
    category:"camera",
    price: 960,
    
    rateNumber: 75,
    rating: 4,
    image:"/images/products/keyboard.png"
  },
  {
    id:5,
    name: "HAVIT HV-G92 Gamepad",

    price: 120,
   
    rateNumber: 88,
    rating: 5,
    image:"/images/products/red_joystick.png"
  },
  {
    id:6,
    name: "AK-900 Wired Keyboard",
   
    price: 960,
    
    rateNumber: 75,
    rating: 4,
    image:"/images/products/keyboard.png"
  }
]


export const cart: cartItems[] = [
  {
    id:1,
    name: "LCD Monitor",
    price: 650,
    image: "/images/products/monitor.png",
    rateNumber: 75,
    rating: 4,
    quantity: 1
  },
  {
    id:2,
    name: "H1 Gamepad",
    price: 550,
    image: "/images/products/red_joystick.png",
    rateNumber: 75,
    rating: 4,
    quantity: 1
  }
]



export const singleProduct:Product  = {
  name: "Havic HV G-92 Gamepad",
  rating: 4,
  quantity:20,
  rateNumber: 150,
  price: 192.00,
  description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  color: ["#A0BCE0", "#E07575"],
  size: ["XS", "S", "M", "L", "XL"],
  image: "/images/products/product_1.png",
  otherImages: ["/images/products/product_2.png", "/images/products/product_3.png","/images/products/product_4.png","/images/products/product_5.png"],
  category: "gaming",
  id: 1
  
}


export const productTableData = [
    {
      product: 'Analog Table Clock',
      qty: 'x2',
      date: 'Feb 5, 2020',
      revenue: '$253.82',
      netProfit: '$60.76',
      status: 'Pending',
    },
    {
      product: 'Basket with handles',
      qty: 'x3',
      date: 'Sep 8, 2020',
      revenue: '$556.24',
      netProfit: '$66.41',
      status: 'Shipping',
    },
    {
      product: 'Flower vase',
      qty: 'x3',
      date: 'Dec 21, 2020',
      revenue: '$115.26',
      netProfit: '$95.66',
      status: 'Refund',
    },
    {
      product: 'Deco accessory',
      qty: 'x2',
      date: 'Aug 13, 2020',
      revenue: '$675.51',
      netProfit: '$84.80',
      status: 'Completed',
    },
    {
      product: 'Pottery Vase',
      qty: 'x2',
      date: 'May 8, 2020',
      revenue: '$910.71',
      netProfit: '$46.52',
      status: 'Shipping',
    },
    {
      product: 'Rose Holdback',
      qty: 'x4',
      date: 'Nov 15, 2020',
      revenue: '$897.90',
      netProfit: '$81.54',
      status: 'Completed',
    },
    {
      product: 'Table Lamp',
      qty: 'x4',
      date: 'Sep 14, 2020',
      revenue: '$563.43',
      netProfit: '$17.46',
      status: 'Pending',
    },
    {
      product: 'Wall Clock',
      qty: 'x3',
      date: 'May 15, 2020',
      revenue: '$883.96',
      netProfit: '$43.08',
      status: 'Refund',
    },
    {
      product: 'Flowering Cactus',
      qty: 'x2',
      date: 'Sep 2, 2020',
      revenue: '$162.15',
      netProfit: '$86.65',
      status: 'Completed',
    },
    {
      product: 'Shell Collection',
      qty: 'x4',
      date: 'Sep 20, 2020',
      revenue: '$378.34',
      netProfit: '$49.08',
      status: 'Completed',
    },
]
  
  