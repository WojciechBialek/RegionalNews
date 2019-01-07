import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.css']
})
export class PageSizeComponent implements OnInit {
  constructor() { }

  @Output()
  eventpagination = new EventEmitter();

  selectHandle(e) {
    this.eventpagination.emit(e);
  }
  ngOnInit() {
  }

}
