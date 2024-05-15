import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/food/services/cart/cart.service';
import { Cart } from '../Shared/Models/Cart';
import { CartItem } from '../Shared/Models/CartItem.';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  quantitySelect: any;

  constructor(private cartService: CartService,private foodService:FoodService) {
let foods=foodService.getAllFoods();
cartService.addToCart(foods[1]);
cartService.addToCart(foods[2]);
cartService.addToCart(foods[3]);
cartService.addToCart(foods[4]);




    this.setCart
  }





  setCart() {
    this.cart = this.cartService.getCart();
    console.log("cart:", this.cart)
  }

  removeFromCart(cartItem: CartService) {
    this.cartService.removeFromCart(cartItem['food'].id);
    this.setCart();
  }


  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  ngOnInit(): void {
    console.log("cart:", this.cart)

  }
}
