import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from 'src/app/products';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // First get the product Id from current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    //console.log(productIdFromRoute);

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('This product has been added to Your Cart!');
  }

}
