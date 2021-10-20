import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ANIMALSSTUB} from "../modules/animals/animals.stub";
import {Animal} from "../modules/types";

@Injectable({
  providedIn: "root",
})
export class AnimalsDataService {

  private readonly data = ANIMALSSTUB;
  private animalsUrl = 'http://localhost:3000/pet';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl)
  }

  public getAnimalById(id: string): Observable<Animal> {
    const url = `${this.animalsUrl}/${id}`;
    return this.http.get<Animal>(url, this.httpOptions);
  }

  public addAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.animalsUrl, animal, this.httpOptions);
  }

  public deleteAnimal(id: number): Observable<Animal> {
    const url = `${this.animalsUrl}/${id}`;
    return this.http.delete<Animal>(url, this.httpOptions);
  }

  public updateAnimal(animal: Animal): Observable<any> {
    return this.http.put(this.animalsUrl, animal, this.httpOptions);
  }
}
