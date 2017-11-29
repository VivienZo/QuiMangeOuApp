import { Component, OnInit } from '@angular/core';
import { Proposition } from '../proposition';
import { PropositionService } from '../proposition.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  propositions: Proposition[] = [];

  constructor(private propositionService: PropositionService) { }

  ngOnInit() {
    this.getPropositions();
  }

  getPropositions(): void {
    this.propositionService.getPropositions()
      .subscribe(propositions => this.propositions = propositions.slice(1, 5));
  }
}
