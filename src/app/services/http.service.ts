import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../app.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  apiKey:string;

  getArticles(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>('https://newsapi.org/v2/top-headlines?country=pl&category=business&apiKey=9d4d11f26caf47cb9a7c5bbe988668f6');
  }
}
