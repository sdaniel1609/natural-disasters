import { Injectable } from '@angular/core';
import {Disaster} from './disaster';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {T} from '@angular/core/src/render3';
import {log} from 'util';

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DisasterService {

  private disastersUrl = 'api/disasters';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getDisasters(): Observable<Disaster[]> {
    this.messageService.add('DisasterService: fetched Disasters')
    return this.http.get<Disaster[]>(this.disastersUrl)
      .pipe(
        tap(_ => this.log('fetched disasters')),
        catchError(this.handleError<Disaster[]>('getDisasters', []))
      );
  }

  getDisaster(id: number): Observable<Disaster> {
    const url = `${this.disastersUrl}/${id}`;
    this.messageService.add(`DisasterService: fetched disaster = id=${id}`);
    return this.http.get<Disaster>(url).pipe(
      tap(_ => this.log(`fetched disaster id=${id}`)),
      catchError (this.handleError<Disaster>(`getDisaster id=${id}`))
    );
  }

  updateDisaster(disaster: Disaster): Observable<any> {
    return this.http.put(this.disastersUrl, disaster, httpOptions).pipe(
      tap(_ => this.log(`updated disaster id=${disaster.id}`)),
      catchError(this.handleError<any>('updateDisaster'))
    );
  }

  addDisaster(disaster: Disaster): Observable<Disaster>{
    return this.http.post<Disaster>(this.disastersUrl, disaster, httpOptions).pipe(
      tap((newDisaster: Disaster) => this.log(`added disaster id=${newDisaster.id}`)),
      catchError(this.handleError<Disaster>('addDisaster'))
    )
  }

  deleteDisaster (disaster: Disaster | number): Observable<Disaster> {
    const id = typeof disaster === 'number' ? disaster : disaster.id;
    const url = `${this.disastersUrl}/${id}`;

    return this.http.delete<Disaster>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted disaster id=${id}`)),
      catchError(this.handleError<Disaster>('deleteDisaster'))
    );
  }

  searchDisasters(term: string): Observable<Disaster[]>{
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<Disaster[]>(`${this.disastersUrl}/?name=${term}`).pipe(
      tap(_ =>this.log(`found disasters matching "${term}"`)),
        catchError(this.handleError<Disaster[]>('searchDisasters', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`DisasterService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
