import { Injectable } from '@angular/core';
import { Cart } from 'src/app/Shared/Models/Cart';
import { CartItem } from 'src/app/Shared/Models/CartItem.';
import { Food } from 'src/app/Shared/Models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;

  private cart: Cart = new Cart();

  constructor() { }

  addToCart(food: Food) {
    let item = this.cart.items.find(item => item.food.id === food.id);
    if (item) {
      this.changeQuantity(food.id, item.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));

  }

  changeQuantity(foodId: number, quantity: number) {
    let item = this.cart.items.find(item => item.food.id === foodId);
    if (!item) return;
    item.quantity = quantity;
  }

  removeFromCart(foodId: number) {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  }

  getCart(): Cart {
    return this.cart;
  }


  // removeFromCart(food: Food) {
  //   let item = this.cart.items.find(item => item.food.id == food.id);
  //   if (item) {
  //     item.quantity--;
  //     if (item.quantity == 0) {
  //       this.cart.items = this.cart.items.filter(item => item.food.id != food.id);
  //     }
  //   }
  // }

}
