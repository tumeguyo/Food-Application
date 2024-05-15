import { Injectable } from '@angular/core';
import { Food } from 'src/app/Shared/Models/Food';
import { Tag } from 'src/app/Shared/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAllFoods().find(food => food.id === id)!;
  }

  getAllFoods(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 12.99,
        description: 'Delicious chicken with fries.',
        tags: ['American', 'Fast Food', 'Chicken'],
        favorite: true,
        stars: 4.8,
        imageUrls: '../assets/images/foods/food-1.jpg',
        origins: ['United States'],
        cookTime: '30 minutes',
      },
      {
        id: 2,
        name: 'Meat Balls',
        price: 18.99,
        description: 'Delicious pizza with various toppings.',
        tags: ['Italian', 'Fast Food'],
        favorite: false,
        stars: 4.5,
        imageUrls: '../assets/images/foods/food-2.jpg',  //'../assets/images/food-2.jpg',
        origins: ['Italy'],
        cookTime: '20 minutes',
      },
      {
        id: 3,
        name: 'Burger',
        price: 8.99,
        description: 'Classic burger with juicy beef patty.',
        tags: ['American', 'Italian', 'Fast Food'],
        favorite: true,
        stars: 4.2,
        imageUrls: '../assets/images/foods/food-3.jpg',
        origins: ['United States, Italy'],
        cookTime: '15 minutes',
      },
      {
        id: 4,
        name: 'American Fries',
        price: 14.99,
        description: 'Medium rare steak with side of vegetables.',
        tags: ['American', 'Mexican', 'Steak'],
        favorite: false,
        stars: 4.6,
        imageUrls: '../assets/images/foods/food-4.jpg',
        origins: ['United States, Mexico'],
        cookTime: '55 minutes',
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 10.99,
        description: 'Well done steak with side of vegetables.',
        tags: ['American', 'Beef Steak', 'Steak'],
        favorite: true,
        stars: 4.7,
        imageUrls: '../assets/images/foods/food-5.jpg',
        origins: ['United States'],
        cookTime: '60 minutes',
      },
      {
        id: 6,
        name: 'Chicken',
        price: 16.99,
        description: 'Delicious chicken with several accompaniments.',
        tags: ['Italian', 'French', 'Chicken', 'Fast Food'],
        favorite: false,
        stars: 4.4,
        imageUrls: '../assets/images/foods/food-6.jpg',
        origins: ['Italy, France'],
        cookTime: '45 minutes',
      },
    ];
  }

  getAllTags(): Tag[] {
    return [
      {
        name: 'All',
        count: 6
      },
      {
        name: 'American',
        count: 4
      },
      {
        name: 'Fast Food',
        count: 4
      },
      {
        name: 'Italian',
        count: 3
      },
      {
        name: 'Mexican',
        count: 1
      },
      {
        name: 'Steak',
        count: 2
      },
      {
        name: 'French',
        count: 1
      },
      {
        name: 'Beef Steak',
        count: 1
      },
      {
        name: 'Chicken',
        count: 2
      },
    ];
  }
}
