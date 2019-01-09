import {Component, Input} from '@angular/core';

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

  itemsPerPageHandler(){
    return this.itemsPerPage === undefined ? 20 : this.itemsPerPage;
  }
  contentHandler(article) {
    article.isDetailsOpen = true;
  }
}
