import { Component, OnInit, Input } from '@angular/core';
import {Disaster} from '../disaster';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DisasterService} from '../disaster.service';

@Component({
  selector: 'app-disaster-details',
  templateUrl: './disaster-details.component.html',
  styleUrls: ['./disaster-details.component.css']
})
export class DisasterDetailsComponent implements OnInit {

  @Input() disaster: Disaster;

  constructor(
    private route: ActivatedRoute,
    private disasterService: DisasterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDisaster();
  }

  getDisaster(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.disasterService.getDisaster(id)
      .subscribe(disaster => this.disaster = disaster);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.disasterService.updateDisaster(this.disaster)
      .subscribe(() => this.goBack());
  }

}
