import { Component,Input } from '@angular/core';
import { Restaurant } from 'src/model/restaurants';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  @Input()
  restaurant?:Restaurant;
}
