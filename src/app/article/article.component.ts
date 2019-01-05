import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  title : string = 'lorem ipsum dolores';
  description : string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem, dolorum ducimus, earum fugit impedit laboriosam molestiae';
  constructor() { }

  ngOnInit() {
  }

}
