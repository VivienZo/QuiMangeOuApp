import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Proposition } from '../proposition';
import { PropositionService } from '../proposition.service';

@Component({
  selector: 'app-proposition-search',
  templateUrl: './proposition-search.component.html',
  styleUrls: [ './proposition-search.component.css' ]
})
export class PropositionSearchComponent implements OnInit {
  propositions$: Observable<Proposition[]>;
  private searchTerms = new Subject<string>();

  constructor(private propositionService: PropositionService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.propositions$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.propositionService.searchPropositions(term)),
    );
  }
}
