import {Component, Input, OnInit} from '@angular/core';
import {Animal} from "../../../types";

@Component({
  selector: 'app-animals-list-item',
  templateUrl: './animals-list-item.component.html',
  styleUrls: ['./animals-list-item.component.less']
})
export class AnimalsListItemComponent implements OnInit {

  @Input()
  public animal!: Animal;

  @Input()
  public hidden: boolean = false;

  public _isOpened: boolean = false;

  constructor() {
  }

  ngOnInit(): void {}

  public switchDetailsView(): void {
    this._isOpened = !this._isOpened;
  }
}
