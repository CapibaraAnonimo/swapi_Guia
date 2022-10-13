import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicles.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicleList: Vehicle[] = [];
  numPages = 0;

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehiclePage(1);
  }

  getVehiclePage(page: number) {
    this.vehicleService.getVehicles(page).subscribe(resp =>  {
      this.vehicleList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

  saveImg(vehicle: Vehicle){
    let nameVehicle = vehicle.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/vehicles/${nameVehicle}.jpg`
  }


}
