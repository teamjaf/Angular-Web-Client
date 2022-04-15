import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Card } from '../Model/card.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'https://localhost:7134/api/Cards'

  constructor(private http: HttpClient) { }

  // Get all cards
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl);
  }
}
