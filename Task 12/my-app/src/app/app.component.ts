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

export class AppComponent implements OnInit{
  title = 'my-app';

  public myClass = "information";
  public hide: any[] = [];
  public bool = false;
  // @ts-ignore
  public animals;


  constructor(private _animalsService: AnimalsService) {
  }

  ngOnInit() {
    this.animals = this._animalsService.getData();
  }


  onClick(index: number) {
    (this.animals)[index].details = ", вес: " + (this.animals)[index].weight + 'кг' + ', возраст:' + (this.animals)[index].age + " месяцев";
    this.bool = true;
    return this.bool;
  }


  hideKittens() {
    for (let i = 0; i < this.animals.length; i++) {
      this.hide[i] = false;
      if (this.animals[i].kindOfAnimal === "Котенок") {
        this.hide[i] = true;
      }
    }
    return this.hide;
  }

  showKittens() {
    for (let i = 0; i < this.animals.length; i++) {
      if (this.animals[i].kindOfAnimal === "Котенок") {
        this.hide[i] = false;
      }
    }
    return this.hide;
  }

}
