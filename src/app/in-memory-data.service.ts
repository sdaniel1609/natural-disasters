import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {Disaster} from './disaster';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const disasters = [
      {
        id: 1,
        type: 'Geological',
        name: 'Earthquake',
        img: 'https://images.unsplash.com/photo-1543398355-bb0d4b80ae22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1511&q=80',
        description: 'An earthquake is the result of a sudden release of energy in the Earth\'s crust that creates seismic waves. At the Earth\'s surface, earthquakes manifest themselves by vibration, shaking, and sometimes displacement of the ground.'},
      {
        id: 2,
        type: 'Hydrological',
        name: 'Flood',
        img: 'https://images.unsplash.com/photo-1525267562-ac553e1a3a5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
        description: 'A flood is an overflow of water that \'submerges\' land.[9] The EU Floods Directive defines a flood as a temporary covering the land with water which is usually not covered by water.'},
      {
        id: 3,
        type: 'Meteorological',
        name: 'Tornadoes',
        img: 'https://images.unsplash.com/photo-1532283589340-63841a5453f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        description: 'A tornado is a violent and dangerous rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud, or the base of a cumulus cloud in rare cases.'},
      {
        id: 4,
        type: 'Tropical cyclone',
        name: 'Hurricane',
        img: 'https://images.unsplash.com/photo-1457327289196-f38b88d97147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
        description: 'A tropical cyclone is a rapidly rotating storm system characterized by a low-pressure center, a closed low-level atmospheric circulation, strong winds, and a spiral arrangement of thunderstorms that produce heavy rain.'},
    ];
    return {disasters};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(disasters: Disaster[]): number {
    return disasters.length > 0 ? Math.max(...disasters.map(hero => hero.id)) + 1 : 11;
  }
}
