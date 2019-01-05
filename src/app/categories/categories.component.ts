import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private httpservice: HttpService ) { }
  categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  buttonHandle(e){
    console.log(e);
  }
  ngOnInit() {
  }

}
