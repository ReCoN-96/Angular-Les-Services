
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails = [
    {
      name: 'Mojito',
      price: '7€',
      img: 'https://zupimages.net/up/19/15/4j3c.jpeg'
    },
    {
      name: 'Ginto',
      price: '10€',
      img: 'https://zupimages.net/up/19/15/oaei.jpg'
    },
    {
      name: 'Vodka Orange',
      price: '5€',
      img: 'https://zupimages.net/up/19/15/jkv4.jpg'
    }
  ];

  getCocktails() {
    return this.cocktails;
  }
}
