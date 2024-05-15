import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../Shared/tag';
import { Food } from '../Shared/Models/Food';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {



  food!: Food;


  @Input() foodPageTags?: string[];
  tags?: Tag[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if (!this.foodPageTags) {
      this.tags = this.foodService.getAllTags();
    }
  }
}