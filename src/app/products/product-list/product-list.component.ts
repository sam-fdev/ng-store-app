import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ]
  })
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
    //onsole.log(products);
  }

  share(){
    window.alert('This Product has been Shared!')
  }

  onNotify(){
    window.alert('You will be Notify when the product goes to Sale!');
  }
}
