import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegionalNews';
}

export interface Article {
  title: string;
  description: string;
  urlToImage: string;
}
