import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getTopHeadlines(){
   return  this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7718a47133034e7cabb4f1f981299a72')
  }
}
