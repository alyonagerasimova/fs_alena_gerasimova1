import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Animal} from "../modules/types";

@Injectable({
  providedIn: "root",
})
export class AnimalsDataService {

  private animalsUrl = 'http://localhost:3000/animals';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

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

  public deleteAnimal(id: number): Observable<unknown> {
    const url = `${this.animalsUrl}/${id}`;
    return this.http.delete<unknown>(url, this.httpOptions);
  }

  public updateAnimal(animal: Animal): Observable<Animal> {
    const url = `${this.animalsUrl}/${animal.id}`;
    return this.http.put<Animal>(url, animal, this.httpOptions);
  }
}
