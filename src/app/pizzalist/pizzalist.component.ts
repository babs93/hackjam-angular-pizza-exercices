import {Component, OnInit, Input, Output, EventEmitter, HostListener} from "@angular/core";
import { PIZZAS } from "../pizzasList";
import { BasketComponent } from "../basket/basket.component";
import { BasketService } from "../basket.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizzalist",
  templateUrl: "./pizzalist.component.html",
  styleUrls: ["./pizzalist.component.css"]
})
export class PizzalistComponent implements OnInit {
  // @Input() name: string;
  //pizzas:any;
  @Output() isAdded = new EventEmitter<boolean>();
  constructor(private basketService: BasketService) {

  }

  ngOnInit() {}
  pizzas = PIZZAS;
  pizzaList: Pizza[] = [];

  updateList(pizza: Pizza, addedToTotal: boolean) {
    this.basketService.addToTotalAmount(pizza.price, addedToTotal);
    this.isAdded.emit(addedToTotal);
  }

  decrementNumber(pizza: Pizza) {
    // Decrement the number of the ordered pizza
    // the total amount of the selected pizza should be reduced as well
    for (let i = 0; i < this.pizzas.length; i++) {
      if(this.pizzas[i].id == pizza.id) {
        if(this.pizzas[i].numberOrdered-1 >=0){
          this.pizzas[i].numberOrdered = this.pizzas[i].numberOrdered - 1;
          this.pizzas[i].totalAmountProduct = this.pizzas[i].totalAmountProduct - pizza.price;
          // call the update list
          this.updateList(pizza, false);
          break;
        }
      }
    }
  }

  incrementNumber(pizza: Pizza) {
    // Increment the number of the ordered pizza
    // the total amount of the selected pizza should be augmented as well
    for (let i = 0; i < this.pizzas.length; i++) {
      if(this.pizzas[i].id == pizza.id) {
        this.pizzas[i].numberOrdered = this.pizzas[i].numberOrdered + 1;
        this.pizzas[i].totalAmountProduct = this.pizzas[i].totalAmountProduct + pizza.price;
        // call the update list
        this.updateList(pizza, true);
        break;
      }
    }
  }
}
