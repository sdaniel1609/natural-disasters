import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Disaster } from '../disaster';
import { DisasterService } from '../disaster.service';

@Component({
  selector: 'app-disaster-search',
  templateUrl: './disaster-search.component.html',
  styleUrls: [ './disaster-search.component.css' ]
})
export class DisasterSearchComponent implements OnInit {
  disasters$: Observable<Disaster[]>;
  private searchTerms = new Subject<string>();

  constructor(private disasterService: DisasterService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.disasters$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.disasterService.searchDisasters(term)),
    );
  }
}
