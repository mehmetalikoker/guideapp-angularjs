import { Component, OnInit } from "@angular/core";
import { City } from "../models/city";
import { CityService } from "../services/city.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
  providers: [CityService]
})
export class CityComponent implements OnInit {

  constructor(private http:HttpClient) {}

  cities: City[];

  ngOnInit() {
    this.getCities().subscribe(data => {
      this.cities = data;
    });
  }

  getCities(){
    return this.http.get<City[]>("https://localhost:44368/api/cities")

  }

}
