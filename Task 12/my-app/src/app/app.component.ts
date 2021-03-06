import {Component, OnInit} from '@angular/core';
import {AnimalsService} from "./animals.service";

// 0) Cоздать класс, описывающий животное, каждое животное должно быть экземпляром этого класса
// 1) Выводить список животных (только тип и кличка, сам список пока захардкодить в app.component)
// 2) При нажатии на элемент списка отображать подробную информацию о животном (с атрибутами животного
// определиться самостоятельно или обсудить с куратором, не менее 5 атрибутов)
// 3)Сделать кнопку "скрыть котиков" по нажатию на которую в списке будут скрываться все котики, а текст кнопки будет изменяться на
// "показать котиков"
// 4)Данные о животных должны храниться в сервисе, вся логика работы с данными должна быть инкапсулирована в этом сервисе

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'animals-app';

  public myClass = "main";
  public classForButton = "main__button";
  public decorText = "main__decor";
  public decorWithDetailsText = "main__decorWithDetails";
  public detailsText = "main__details";
  public hide: any[] = [];
  public bool = false;
  public hideButton = false;
  // @ts-ignore
  public animals;
  public kindOfAnimalIsCat: boolean | undefined;


  constructor(private _animalsService: AnimalsService) {
  }

  ngOnInit() {
    this.animals = this._animalsService.getData();
  }


  onClick(index: number) {
    this.bool = false;
    (this.animals)[index].details = (this.animals)[index].gender + ', ' + (this.animals)[index].age +
      ', ' + (this.animals)[index].breed + ', ' + (this.animals)[index].hobby +
      ', ' + (this.animals)[index].otherFeatures;
    this.bool = true;
    return this.bool;
  }


  hideKittens() {
    this.hideButton = true;

    this.animals.forEach((animal: any, i: number) => {
      this.hide[i] = false;
      this.kindOfAnimalIsCat = animal.kindOfAnimal === "Котенок" || animal.kindOfAnimal === "Кот"
        || animal.kindOfAnimal === "Кошка";

      if (this.kindOfAnimalIsCat) {
        this.hide[i] = true;
      }
    });
    return this.hide;
  }

  showKittens() {
    this.hideButton = false;

    this.animals.forEach((animal: any, i: number) => {
      if (this.kindOfAnimalIsCat) {
        this.hide[i] = false;
      }
    });
    return this.hide;
  }
}
