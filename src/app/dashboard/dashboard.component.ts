import { Component, OnInit } from '@angular/core';
import {Disaster} from '../disaster';
import {DisasterService} from '../disaster.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  disasters: Disaster [] = [];

  constructor(private disasterService: DisasterService) { }

  ngOnInit() {
    this.getDisasters();
  }

  getDisasters(): void {
    this.disasterService.getDisasters()
      .subscribe(disasters => this.disasters = disasters);
  }

  delete(disaster: Disaster): void {
    this.disasters = this.disasters.filter(h => h !== disaster );
    this.disasterService.deleteDisaster(disaster).subscribe();
  }
}
