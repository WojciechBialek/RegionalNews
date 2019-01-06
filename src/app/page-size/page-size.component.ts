import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.css']
})
export class PageSizeComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  @Output()
  eventAmount = new EventEmitter();

  selectHandle(e) {
    console.log(e);
    this.httpService.getArticlesAmount(e).subscribe(amount => {
      console.log(amount);
      this.eventAmount.emit(amount);
    });
  }


  ngOnInit() {
  }

}
