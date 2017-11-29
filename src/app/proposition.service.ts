import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Proposition } from './proposition';
import { PROPOSITIONS } from './mock-propositions';
import { MessageService } from './message.service';

@Injectable()
export class PropositionService {

  constructor(private messageService: MessageService) { }

  getPropositions(): Observable<Proposition[]> {
    this.messageService.add('PropositionService: getPropositions()');
    return of(PROPOSITIONS);
  }

  getProposition(slug: string): Observable<Proposition> {
    this.messageService.add('PropositionService: getProposition(' + slug + ')');
    return of(PROPOSITIONS.find(proposition => proposition.slug === slug));
  }

}
