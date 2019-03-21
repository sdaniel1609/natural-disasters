import { Component, OnInit } from '@angular/core';
import {Disaster} from '../disaster';
import {DisasterService} from '../disaster.service';

@Component({
  selector: 'app-disasters',
  templateUrl: './disasters.component.html',
  styleUrls: ['./disasters.component.css']
})
export class DisastersComponent implements OnInit {

  // Defined a component property called disasters to expose DISASTERS (mock data) array for binding

  disasters: Disaster [];

  constructor(private disasterService: DisasterService) { }

  ngOnInit() {
    this.getDisasters();
    console.log(this.disasters)
  }

  getDisasters(): void {
    this.disasterService.getDisasters()
      .subscribe(disasters => this.disasters = disasters);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return; }
    this.disasterService.addDisaster({name} as Disaster)
      .subscribe(disaster => {
        this.disasters.push(disaster);
      });
  }

  delete(disaster: Disaster): void {
    this.disasters = this.disasters.filter(h => h !== disaster );
    this.disasterService.deleteDisaster(disaster).subscribe();
  }
}
