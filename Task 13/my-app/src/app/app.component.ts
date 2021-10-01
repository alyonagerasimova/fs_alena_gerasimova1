import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "./modules/animals/animals.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public myClass = "main";

  constructor(private _animalsService: AnimalsService) {
  }

  ngOnInit() {
  }
}
