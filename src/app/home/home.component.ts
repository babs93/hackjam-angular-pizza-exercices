import { Component, OnInit, Input } from "@angular/core";
import { PIZZAS } from "../pizzasList";
import { BasketService } from "../basket.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  counter = 0;
  subscription: any;
  totalAmount:number;

  constructor(private basketService:BasketService, private modalService: NgbModal) { }
  pizzas = PIZZAS;

  ngOnInit() {
    this.subscription = this.basketService.getEventEmitter().subscribe(amount => this.totalAmount=amount);
  }

  updateList(isIncrementing: boolean) {
    /* You should check if the value is incrementing or not and
       change the value of the counter depending of the value of the boolean
    */
    if(isIncrementing){
      this.counter = this.counter+1;
    }
    else{
      if(this.counter-1>=0){
        this.counter = this.counter-1;
      }
    }
  }

  resetAll() {
    // First, you need to set the value of the total Amount and the number of pizza Ordered to every pizza to 0 (use map)
    for (let i = 0; i < this.pizzas.length; i++) {
      this.pizzas[i].numberOrdered = 0;
      this.pizzas[i].totalAmountProduct = 0;
    }
    // Then, don't forget to also reset the counter
    this.counter = 0;
    // Finally, let's call the service to reset the basket. (Be sure that you have called the service inside the constructor !)
    this.basketService.resetBasket();
  }

  buyNow(testModal) {
    /*
     If the total amount of the basket is greater than 0 and equal or less to 200,
    you can open the modal that contains the pizza choosen
     */
     if(this.totalAmount>0 && this.totalAmount<=200){
       this.modalService.open(testModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

       }, (reason) => {

       });
     }
     else{

     }
  }
}
