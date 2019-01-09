import {Component, EventEmitter, Output} from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private httpService: HttpService ) { }
  dictionary = [
    {
      name: 'business',
      translate: 'biznes'
    },
    {
    name: 'entertainment',
    translate: 'rozrywka'
  },
    {
      name: 'health',
      translate: 'zdrowie'
    },
    {
      name: 'science',
      translate: 'nauka'
    },
    {
      name: 'sports',
      translate: 'sport'
    },
    {
      name: 'technology',
      translate: 'technologie'
    }
  ];
  @Output()
  taskEvent = new EventEmitter();

  buttonHandle(category) {
    this.httpService.getArticles(category).subscribe(articles => {
      this.taskEvent.emit(articles);
    });
  }
}
