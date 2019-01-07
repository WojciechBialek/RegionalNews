import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private httpService: HttpService ) { }
  categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  @Output()
  taskEvent = new EventEmitter();

  buttonHandle(category) {
    console.log(category);
    this.httpService.getArticles(category).subscribe(articles => {
      console.log(articles);
      this.taskEvent.emit(articles);
    });
  }

  ngOnInit() {
  }

}
