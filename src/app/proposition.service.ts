import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Proposition } from './proposition';
import { MessageService } from './message.service';

@Injectable()
export class PropositionService {

  private propositionsUrl = 'api/v1/propositions';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET propositions from the server */
  getPropositions(): Observable<Proposition[]> {
    return this.http.get<Proposition[]>(this.propositionsUrl)
      .pipe(
        tap(propositions => this.log(`fetched propositions`)),
        catchError(this.handleError('getPropositions', []))
      );
  }

  /** GET proposition by id. Will 404 if id not found */
  getProposition(id: string): Observable<Proposition> {
    const url = `${this.propositionsUrl}/${id}`;
    return this.http.get<Proposition>(url)
      .pipe(
        tap(_ => this.log(`fetched proposition id=${id}`)),
        catchError(this.handleError<Proposition>(`getProposition id=${id}`))
      );
  }

  /** PUT: update the proposition on the server */
  updateProposition(prop: Proposition): Observable<any> {
    return this.http.put(this.propositionsUrl, prop, this.httpOptions).pipe(
      tap(_ => this.log(`updated proposition id=${prop.id}`)),
      catchError(this.handleError<any>('updateProposition'))
    );
  }

  /** POST: add a new proposition to the server */
  addProposition(prop: Proposition): Observable<Proposition> {
    return this.http.post<Proposition>(this.propositionsUrl, prop, this.httpOptions).pipe(
      tap((proposition: Proposition) => this.log(`created proposition resto=${proposition.resto}`)),
      catchError(this.handleError<any>('createProposition'))
    )
  }

  /** DELETE: delete the proposition from the server */
  deleteProposition (prop: Proposition | string): Observable<Proposition> {
    const id = typeof prop === 'string' ? prop : prop.id;
    const url = `${this.propositionsUrl}/${id}`;

    return this.http.delete<Proposition>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted proposition id=${id}`)),
      catchError(this.handleError<Proposition>('deleteProposition'))
    );
  }

  /** Log a PropositionService message with the MessageService */
  private log(message: string) {
    this.messageService.add('PropositionService: ' + message);
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
