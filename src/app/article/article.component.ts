import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  {

  @Input()
  itemsPerPage;
  @Input()
  tasks;

  articlesTest = this.tasks;


  itemsPerPageHandler(){
    return this.itemsPerPage === undefined ? 20 : this.itemsPerPage;
  }
  contentHandler(task){
    console.log(this.tasks)
    console.log(this.articlesTest)
  }
}

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  urlToImage?: string;
  isDetailsOpen: boolean;
}
