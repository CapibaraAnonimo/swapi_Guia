import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planets.interface';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planetList: Planet[] = [];

  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe((resp) => {
      this.planetList = resp.results;
    });
  }

  saveImg(planet: Planet){
    let namePlanet = planet.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/planets/${namePlanet}.jpg`
  }

  //https://starwars-visualguide.com/assets/img/planets/2.jpg

}
