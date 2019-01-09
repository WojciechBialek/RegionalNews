import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations: [
    trigger('loadAnimation',[
      state('open', style({
        opacity: 1,
        transform: 'none',
      })),
      state('*', style({
        opacity: 0,
        transform: 'translateY(-50px)',
      })),
      transition('* => open', [
        animate('0.5s')
      ]),
    ])
  ]
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
