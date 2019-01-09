import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.css']
})
export class PageSizeComponent {
  constructor() { }
  pagesizeValue: number[] = [20 , 30 , 40, 50];
  @Output()
  paginationEvent = new EventEmitter();

  selectHandle(e) {
    this.paginationEvent.emit(e);
  }
}
