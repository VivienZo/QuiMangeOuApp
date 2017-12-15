import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Validation } from './validation';
import { MessageService } from './message.service';

@Injectable()
export class GroupeService {

  private groupesUrl = 'api/v1/groupes';
  private validationsUrl = 'api/v1/validations';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** POST: demande la création d'un nouveau groupe */
  addGroupe(validation: Validation): Observable<any> {
    return this.http.post<Validation>(this.validationsUrl, validation, this.httpOptions).pipe(
      tap((validation: Validation) => this.log(`Demande de validation du groupe ${validation.nomGroupe}`)),
      catchError(this.handleError<any>('createProposition'))
    )
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
