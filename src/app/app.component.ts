import { Component, OnInit } from '@angular/core';
import { CardsService } from './service/cards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cards-web';

  constructor(private CardsService: CardsService){

  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(){
    this.CardsService.getAllCards()
    .subscribe(
      response =>
      console.log(response)
    );
  }

}
