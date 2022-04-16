import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpResponse } from '@angular/common/http'
import { Card } from '../Model/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'http://localhost:7134/api/Cards'


  constructor(private http: HttpClient) { }

  // Get all cards
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl);
  }

  // Post data
  addCard(card: Card): Observable<Card> {
    card.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Card>(this.baseUrl, card);
  }

  deleteCard(id: string): Observable<Card> {
   return this.http.delete<Card>(this.baseUrl + '/' + id);
  }
}
