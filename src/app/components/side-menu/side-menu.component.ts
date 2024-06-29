import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @Output() closeX: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  close() {

    this.closeX.emit(false);
  }
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
}
