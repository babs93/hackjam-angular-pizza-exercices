import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'hj-intro-angular';

  constructor(private router: Router, private activatedRoute:ActivatedRoute){

  }

  ngOnInit(){
    const path = this.activatedRoute.snapshot.queryParams['path'];
    const navigateTo = '/' + path;
    if (path) {
      console.log(navigateTo);
      this.router.navigate([navigateTo]);
    }
  }
}
