import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://apisimpsons.fly.dev/api/personajes?limit=250&page=1';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(this.url);
  }
}