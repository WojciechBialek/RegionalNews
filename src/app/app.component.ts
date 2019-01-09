import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wiadomości Regionalne!';
  tasks;
  itemsPerPage;
  selected(data) {
    this.tasks = data.articles;
  }
  pagination(data){
    this.itemsPerPage = Number(data);
  }
}
