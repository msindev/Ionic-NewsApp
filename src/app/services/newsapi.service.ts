import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NewsResponse } from '../interfaces/news-response';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  topHeadlinesPath = environment.baseURL;

  constructor(private http: HttpClient) {}

  getTopCountryHeadlines(
    country: string,
    category: string
  ): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
      this.topHeadlinesPath +
        `?country=${country}&category=${category}&pageSize=10&apiKey=${environment.apiKey}`
    );
  }
}
