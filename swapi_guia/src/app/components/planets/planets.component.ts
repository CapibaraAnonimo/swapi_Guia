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
  numPages = 0;

  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {
   this.getPlanetPage(1);
  }

  getPlanetPage(page: number) {
    this.planetService.getPlanets(page).subscribe(resp =>  {
      this.planetList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

  saveImg(planet: Planet){
    let namePlanet = planet.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/planets/${namePlanet}.jpg`
  }

}
