import { Component, OnInit } from '@angular/core';
import { Food } from '../Shared/Models/Food';
import { ActivatedRoute, Router, } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/food/services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!: Food


  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router,


  ) {
    this.activatedRoute.params.subscribe((params => {
      if (params['id'])
        this.food = this.foodService.getFoodById(params['id'])
      console.log(this.food)
    }))
  }




  ngOnInit(): void {
  }


  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
