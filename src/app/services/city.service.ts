import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { City } from "../models/city";


@Injectable({
  providedIn: "root"
})
export class CityService {

  constructor(private httpClient:HttpClient) {}
  path: "https://localhost:44368/api/cities";

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path);
  }
}
