import { Component, OnInit } from '@angular/core';
import { Proposition } from '../proposition';
import { PropositionService } from '../proposition.service';

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.css']
})
export class PropositionsComponent implements OnInit {

  propositions: Proposition[];

  constructor(private propositionService: PropositionService) { }

  ngOnInit() {
    this.getPropositions();
  }

  getPropositions(): void {
    this.propositionService.getPropositions()
      .subscribe(propositions => this.propositions = propositions);
  }

  add(resto: string): void {
    resto = resto.trim();
    if (!resto) { return; }
    this.propositionService.addProposition({ resto } as Proposition)
    .subscribe(proposition => {
      this.propositions.push(proposition);
    });
  }

  delete(proposition: Proposition): void {
    this.propositions = this.propositions.filter(p => p !== proposition);
    this.propositionService.deleteProposition(proposition).subscribe();
  }

}
