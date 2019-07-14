import {Injectable, Output, EventEmitter} from '@angular/core';
import { Pizza } from './pizza';
import { PIZZAS } from "./pizzasList";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor() {}
  pizza:Pizza = new Pizza();
  pizzas = PIZZAS;

  get(id:number) {
    for (let i = 0; i < this.pizzas.length; i++) {
      if(this.pizzas[i].id == id) {
        this.pizza.name = this.pizzas[i].name;
        this.pizza.price = this.pizzas[i].price;
        this.pizza.numberOrdered = this.pizzas[i].numberOrdered;
        this.pizza.totalAmountProduct = this.pizzas[i].totalAmountProduct;
        break;
      }
    }
    return this.pizza;
  }

  update(pizza:Pizza) {
    for (let i = 0; i < PIZZAS.length; i++) {
      if(PIZZAS[i].id == pizza.id) {
        PIZZAS[i].name = pizza.name;
        PIZZAS[i].price = pizza.price;
        PIZZAS[i].numberOrdered = pizza.numberOrdered;
        PIZZAS[i].totalAmountProduct = pizza.totalAmountProduct;
        break;
      }
    }
  }

  reset() {
    for (let i = 0; i < PIZZAS.length; i++) {
      PIZZAS[i].name = '';
      PIZZAS[i].price = 0;
      PIZZAS[i].numberOrdered = 0;
      PIZZAS[i].totalAmountProduct = 0;
    }
  }
}
