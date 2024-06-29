import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  categories: any[] = [
    {
      name: 'Clothes',
      imgUrl: './assets/images/icons/dress.svg',
      types: [
        { name: 'Shirt', num: '300' },
        { name: 'Shorts & Jeans', num: '70' },
        { name: 'Jacket', num: '50' },
        { name: 'Dress & Frock', num: '76' },
      ],
    },
    {
      name: 'Footwear',
      imgUrl: './assets/images/icons/shoes.svg',
      types: [
        { name: 'Sports', num: '45' },
        { name: 'Formal', num: '75' },
        { name: 'Casual', num: '35' },
        { name: 'Safety Shoes', num: '26' },
      ],
    },
    {
      name: 'Jewelry',
      imgUrl: './assets/images/icons/jewelry.svg',
      types: [
        { name: 'Earrings', num: '45' },
        { name: 'Couple Rings', num: '75' },
        { name: 'Necklace', num: '35' },
      ],
    },
    {
      name: 'Perfume',
      imgUrl: './assets/images/icons/perfume.svg',
      types: [
        { name: 'Clothes Perfume', num: '45' },
        { name: 'Deodorant', num: '75' },
        { name: 'Jacket', num: '35' },
        { name: 'Dress & Frock', num: '26' },
      ],
    },
    {
      name: 'Cosmetics',
      imgUrl: './assets/images/icons/cosmetics.svg',
      types: [
        { name: 'Shampoo', num: '45' },
        { name: 'Sunscreen', num: '75' },
        { name: 'Body Wash', num: '35' },
        { name: 'Makeup Kit', num: '26' },
      ],
    },
    {
      name: 'Glasses',
      imgUrl: './assets/images/icons/glasses.svg',
      types: [
        { name: 'Sunglasses', num: '45' },
        { name: 'Lenses', num: '75' },
      ],
    },
    {
      name: 'Bags',
      imgUrl: './assets/images/icons/bag.svg',
      types: [
        { name: 'Shopping Bag', num: '45' },
        { name: 'Gym Backpack', num: '75' },
        { name: 'Purse', num: '35' },
        { name: 'Wallet', num: '26' },
      ],
    },
  ];
  bestSeller:any[]=[
    {
    name:'Baby Fabric Shoes',
    lastPrice:'$5.00',
    newPrice:'$4.00',
    img:'./assets/images/products/1.jpg',
  },
    {
    name:"Men's Hoodies T-Shirt",
    lastPrice:'$17.00',
    newPrice:'$7.00',
    img:'./assets/images/products/2.jpg',
  },
    {
    name:'Girls T-Shirt',
    lastPrice:'$5.00',
    newPrice:'$3.00',
    img:'./assets/images/products/3.jpg',
  },
    {
    name:'Woolen Hat For Men',
    lastPrice:'$15.00',
    newPrice:'$12.00',
    img:'./assets/images/products/4.jpg',
  },
    {
    name:'Baby Fabric Shoes',
    lastPrice:'$5.00',
    newPrice:'$4.00',
    img:'./assets/images/products/1.jpg',
  },
    {
    name:"Men's Hoodies T-Shirt",
    lastPrice:'$17.00',
    newPrice:'$7.00',
    img:'./assets/images/products/2.jpg',
  },
    {
    name:'Girls T-Shirt',
    lastPrice:'$5.00',
    newPrice:'$3.00',
    img:'./assets/images/products/3.jpg',
  },
    {
    name:'Woolen Hat For Men',
    lastPrice:'$15.00',
    newPrice:'$12.00',
    img:'./assets/images/products/4.jpg',
  },
    {
    name:'Baby Fabric Shoes',
    lastPrice:'$5.00',
    newPrice:'$4.00',
    img:'./assets/images/products/1.jpg',
  },
    {
    name:"Men's Hoodies T-Shirt",
    lastPrice:'$17.00',
    newPrice:'$7.00',
    img:'./assets/images/products/2.jpg',
  },
    {
    name:'Girls T-Shirt',
    lastPrice:'$5.00',
    newPrice:'$3.00',
    img:'./assets/images/products/3.jpg',
  },
    {
    name:'Woolen Hat For Men',
    lastPrice:'$15.00',
    newPrice:'$12.00',
    img:'./assets/images/products/4.jpg',
  },
    {
    name:'Baby Fabric Shoes',
    lastPrice:'$5.00',
    newPrice:'$4.00',
    img:'./assets/images/products/1.jpg',
  },
    {
    name:"Men's Hoodies T-Shirt",
    lastPrice:'$17.00',
    newPrice:'$7.00',
    img:'./assets/images/products/2.jpg',
  },
    {
    name:'Girls T-Shirt',
    lastPrice:'$5.00',
    newPrice:'$3.00',
    img:'./assets/images/products/3.jpg',
  },
    {
    name:'Woolen Hat For Men',
    lastPrice:'$15.00',
    newPrice:'$12.00',
    img:'./assets/images/products/4.jpg',
  },
]
newArrivals: any[] = [
  {
    name: 'Relaxed Short Full Sleeve T-Shirt',
    category: 'Clothes',
    price: '$45.00',
    oldPrice: '$12.00',
    imgUrl: './assets/images/products/clothes-1.jpg',
  },
  {
    name: 'Girls Pnk Embro Design Top',
    category: 'Clothes',
    price: '$61.00',
    oldPrice: '$9.00',
    imgUrl: './assets/images/products/clothes-2.jpg',
  },
  {
    name: 'Black Floral Wrap Midi Skirt',
    category: 'Clothes',
    price: '$76.00',
    oldPrice: '$25.00',
    imgUrl: './assets/images/products/clothes-3.jpg',
  },
  {
    name: 'Pure Garment Dyed Cotton Shirt',
    category: 'Mens Fashion',
    price: '$68.00',
    oldPrice: '$31.00',
    imgUrl: './assets/images/products/shirt-1.jpg',
  },
  {
    name: 'MEN Yarn Fleece Full-Zip Jacket',
    category: 'Winter Wear',
    price: '$61.00',
    oldPrice: '$11.00',
    imgUrl: './assets/images/products/jacket-5.jpg',
  },
  {
    name: 'Boot With Suede Detail',
    category: 'Boots',
    price: '$20.00',
    oldPrice: '$30.00',
    imgUrl: './assets/images/products/jacket-1.jpg',
  },
  {
    name: "Men's Leather Formal Wear Shoes",
    category: 'Formal',
    price: '$56.00',
    oldPrice: '$78.00',
    imgUrl: './assets/images/products/jacket-3.jpg',
  },
  {
    name: "Casual Men's Brown Shoes",
    category: 'Casual',
    price: '$50.00',
    oldPrice: '$55.00',
    imgUrl: './assets/images/products/shorts-1.jpg',
  },
];



Trending: any[] = [
  {
    name: 'Pocket Watch Leather Pouch',
    category: 'Watches',
    price: '$50.00',
    oldPrice: '$34.00',
    imgUrl: './assets/images/products/sports-1.jpg',
  },
  {
    name: 'Silver Deer Heart Necklace',
    category: 'Jewellery',
    price: '$84.00',
    oldPrice: '$30.00',
    imgUrl: './assets/images/products/sports-2.jpg',
  },
  {
    name: 'Titan 100 Ml Womens Perfume',
    category: 'Perfume',
    price: '$42.00',
    oldPrice: '$10.00',
    imgUrl: './assets/images/products/party-wear-1.jpg',
  },
  {
    name: "Men's Leather Reversible Belt",
    category: 'Belt',
    price: '$24.00',
    oldPrice: '$10.00',
    imgUrl: './assets/images/products/sports-3.jpg',
  },
  {
    name: 'Platinum Zircon Classic Ring',
    category: 'Jewellery',
    price: '$62.00',
    oldPrice: '$65.00',
    imgUrl: './assets/images/products/sports-6.jpg',
  },
  {
    name: 'Smart Watche Vital Plus',
    category: 'Watches',
    price: '$56.00',
    oldPrice: '$78.00',
    imgUrl: './assets/images/products/shoe-3.jpg',
  },
  {
    name: 'Shampoo Conditioner Packs',
    category: 'Cosmetics',
    price: '$20.00',
    oldPrice: '$30.00',
    imgUrl: './assets/images/products/shoe-1.jpg',
  },
  {
    name: 'Rose Gold Peacock Earrings',
    category: 'Jewellery',
    price: '$20.00',
    oldPrice: '$30.00',
    imgUrl: './assets/images/products/shoe-2.jpg',
  },
];
topRated: any[] = [
  {
    name: 'Running & Trekking Shoes - White',
    category: 'Sports',
    price: '$49.00',
    oldPrice: '$15.00',
    imgUrl: './assets/images/products/watch-3.jpg',
  },
  {
    name: 'Trekking & Running Shoes - Black',
    category: 'Sports',
    price: '$78.00',
    oldPrice: '$36.00',
    imgUrl: './assets/images/products/jewellery-3.jpg',
  },
  {
    name: 'Womens Party Wear Shoes',
    category: 'Party Wear',
    price: '$94.00',
    oldPrice: '$42.00',
    imgUrl: './assets/images/products/perfume.jpg',
  },
  {
    name: "Sports Claw Women's Shoes",
    category: 'Sports',
    price: '$54.00',
    oldPrice: '$65.00',
    imgUrl: './assets/images/products/belt.jpg',
  },
  {
    name: 'Air Trekking Shoes - White',
    category: 'Sports',
    price: '$52.00',
    oldPrice: '$55.00',
    imgUrl: './assets/images/products/jewellery-2.jpg',
  },
  {
    name: 'Boot With Suede Detail',
    category: 'Boots',
    price: '$20.00',
    oldPrice: '$30.00',
    imgUrl: './assets/images/products/watch-1.jpg',
  },
  {
    name: "Men's Leather Formal Wear Shoes",
    category: 'Formal',
    price: '$56.00',
    oldPrice: '$78.00',
    imgUrl: './assets/images/products/shampoo.jpg',
  },
  {
    name: "Casual Men's Brown Shoes",
    category: 'Casual',
    price: '$50.00',
    oldPrice: '$55.00',
    imgUrl: './assets/images/products/jewellery-1.jpg',
  },
];


newProducts: any[] = [
  {
    pref: 'Mens Winter Leathers Jackets',
    offer: '15%',
    category: 'JACKET',
    newPrice: '$48.00',
    lastPrice: '$75.00',
    imgs:[
      './assets/images/products/jacket-3.jpg',
      './assets/images/products/jacket-4.jpg'
    ],
  },
  {
    category:     'SHIRT',
    pref: 'Pure Garment Dyed Cotton Shirt',
    newPrice:  '$45.00',
    lastPrice: '$56.00',
    offer:    'SALE',
    imgs:[
      './assets/images/products/shirt-1.jpg',
      './assets/images/products/shirt-2.jpg'
    ]
  },
  {
    category:     'JACKET',
    pref: 'MEN Yarn Fleece Full-Zip Jacket',
    newPrice:  '$58.00',
    lastPrice: '$65.00',
    offer:    '',
    imgs:[
      './assets/images/products/jacket-5.jpg',
      './assets/images/products/jacket-6.jpg'
    ]
  },
  {
    category:     'SKIRT',
    pref: 'Black Floral Wrap Midi Skirt',
    newPrice:  '$25.00',
    lastPrice: '$35.00',
    offer:    '',
    imgs:[
      './assets/images/products/clothes-3.jpg',
      './assets/images/products/clothes-4.jpg'
    ]
  },
  {
    category: 'CASUAL',
    pref:     "Casual Men's Brown Shoes",
    newPrice:  '$99.00',
    lastPrice: '$105.00',
    offer:    '',
    imgs:[
      './assets/images/products/shoe-2.jpg',
      './assets/images/products/shoe-2_1.jpg'
    ]

  },
  {
    category: 'WATCHES',
    pref:     'Pocket Watch Leather Pouch',
    newPrice:  '$150.00',
    lastPrice: '$170.00',
    offer:    'SALE',
    imgs:[
      './assets/images/products/watch-3.jpg',
      './assets/images/products/watch-4.jpg'
    ]
  },
  {
    category: 'WATCHES',
    pref:     'Smart Watche Vital Plus',
    newPrice:  '$100.00',
    lastPrice: '$120.00',
    offer:    '',
    imgs:[
      './assets/images/products/watch-1.jpg',
      './assets/images/products/watch-2.jpg'
    ]
  },
  {
    category: 'PARTY WEAR',
    pref:     'Womens Party Wear Shoes',
    newPrice:  '$25.00',
    lastPrice: '$30.00',
    offer:    'SALE',
    imgs:[
      './assets/images/products/jacket-1.jpg',
      './assets/images/products/jacket-2.jpg'
    ]
  },
  {
    category: 'JACKET',
    pref:     'Mens Winter Leathers Jackets',
    newPrice:  '$32.00',
    lastPrice: '$45.00',
    offer:    '',
    imgs:[
      './assets/images/products/jacket-1.jpg',
      './assets/images/products/jacket-2.jpg'
    ]
  },
  {
    category: 'SPORTS',
    pref:     'Trekking & Running Shoes - Black',
    newPrice:  '$58.00',
    lastPrice: '$64.00',
    offer:    'SALE',
    imgs:[
      './assets/images/products/sports-2.jpg',
      './assets/images/products/sports-4.jpg'
    ]
  },
  {
    category: 'FORMAL',
    pref:     "Men's Leather Formal Wear Shoes",
    newPrice:  '$50.00',
    lastPrice: '$65.00',
    offer:    '',
    imgs:[
      './assets/images/products/shoe-1.jpg',
      './assets/images/products/shoe-1_1.jpg'
    ]
  },
  {
    category: 'SHORTS',
    pref:     'Better Basics French Terry Sweatshorts',
    newPrice:  '$78.00',
    lastPrice: '$85.00',
    offer:    'SALE',
    imgs:[
      './assets/images/products/shorts-1.jpg',
      './assets/images/products/shorts-2.jpg'
    ]
  },

];


  open(i: any) {
    let open: any = document.getElementById(`open${i}`);
    let icon: any = document.getElementById(`icon${i}`);

    if (open?.classList.contains('h-0')) {
      for (let x = 0; x < 7; x++) {
        let openX: any = document.getElementById(`open${x}`);
        let iconX: any = document.getElementById(`icon${x}`);
        iconX.classList.replace('bi-dash-lg', 'bi-plus-lg');
        openX.style.height = 0;
        openX.classList.replace('open', 'h-0');
      }
      icon.classList.replace('bi-plus-lg', 'bi-dash-lg');
      open.style.height = 40 * this.categories[i].types.length + 'px';
      console.log(open.style.height);

      open.classList.replace('h-0', 'open');
    } else {
      open.classList.replace('open', 'h-0');
      open.style.height = 0;

      icon.classList.replace('bi-dash-lg', 'bi-plus-lg');
    }
  }
}
