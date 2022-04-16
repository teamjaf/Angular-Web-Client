import { Component, OnInit } from '@angular/core';
import { Card } from './Model/card.model';
import { CardsService } from './service/cards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cards-web';
  cards: Card[] = [];
  card: Card = {
    id: '',
    cardHolderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cVC: '',
  }

  constructor(private CardsService: CardsService){

  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(){
    this.CardsService.getAllCards()
    .subscribe(
      response =>{
        console.log(response);
        this.cards = response;
      }
    );
  }

  onSubmit(){
    console.log(this.card)
    this.CardsService.addCard(this.card)
    .subscribe(
      response =>{
        this.getAllCards();
        this.card = {
          id: '',
          cardHolderName: '',
          cardNumber: '',
          expiryMonth: '',
          expiryYear: '',
          cVC: '',
        };
      },
      error => console.log("Error: ", error)
    )
    }

    deleteCard(id: string){
      this.CardsService.deleteCard(id)
      .subscribe(
        response =>{
          console.log(response);
          this.getAllCards();
        }
      );
    }
  }
