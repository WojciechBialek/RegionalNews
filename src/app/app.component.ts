import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wiadomości Regionalne!';
  tasks;
  selected(data) {
    this.tasks = data.articles;
    console.log(this.tasks);
  }
  selectedAmount(data) {
    this.tasks = data.articles;
    console.log(this.tasks);
  }

  constructor() {  }
}


export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  urlToImage?: string;
}


