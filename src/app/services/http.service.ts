import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Article} from '../app.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  readonly URL = 'https://newsapi.org/v2/top-headlines?country=pl';
  readonly param = new HttpParams().set('apiKey', '9d4d11f26caf47cb9a7c5bbe988668f6');
  category: string;
  amount = 20;

  getArticles(data): Observable<Array<Article>> {
    isNaN(data) ? this.category = data : this.amount = data;
    return this.http.get<Array<Article>>(this.URL + '&category=' + this.category + '&PageSize=' + this.amount,  {params: this.param});
  }
}
