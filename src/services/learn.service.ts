import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LearnService {
  url = 'http://localhost:3000/api/learn';

  options = {
    headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
  }
  constructor(private http: HttpClient) {
  }

  getBotMessage(userMessage: string) {
    return this.http.post(this.url + '?message=' + userMessage, this.options);
  }
}
