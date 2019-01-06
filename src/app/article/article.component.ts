import {Component, Input, OnInit} from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  
  constructor() { }
  @Input()
  tasks;


  ngOnInit() {
  }

}
