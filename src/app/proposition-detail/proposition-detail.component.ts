import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Proposition } from '../proposition';
import { PropositionService } from '../proposition.service';

@Component({
  selector: 'app-proposition-detail',
  templateUrl: './proposition-detail.component.html',
  styleUrls: ['./proposition-detail.component.css']
})
export class PropositionDetailComponent implements OnInit {

  @Input() proposition: Proposition;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private propositionService: PropositionService) { }

  ngOnInit() {
    this.getProposition();
  }

  getProposition(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.propositionService.getProposition(slug)
      .subscribe(proposition => this.proposition = proposition);
  }

  save(): void {
    this.propositionService.updateProposition(this.proposition)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
