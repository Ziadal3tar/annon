import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  offers: any[] = [
    {
      name: 'DRESS & FROCK',
      imgUrl: '../../../assets/images/icons/dress.svg',
      quantity: '41',
    },
    {
      name: 'Winter wear',
      imgUrl: '../../../assets/images/icons/coat.svg',
      quantity: '35',
    },
    {
      name: 'Glasses & lens',
      imgUrl: '../../../assets/images/icons/glasses.svg',
      quantity: '74',
    },
    {
      name: 'Shorts & jeans',
      imgUrl: '../../../assets/images/icons/shorts.svg',
      quantity: '94',
    },
    {
      name: 'T-shirts',
      imgUrl: '../../../assets/images/icons/tee.svg',
      quantity: '48',
    },
    {
      name: 'Jacket',
      imgUrl: '../../../assets/images/icons/jacket.svg',
      quantity: '24',
    },
    {
      name: 'Watch',
      imgUrl: '../../../assets/images/icons/watch.svg',
      quantity: '54',
    },
    {
      name: 'Hat & caps',
      imgUrl: '../../../assets/images/icons/hat.svg',
      quantity: '77',
    },
  ];
}
