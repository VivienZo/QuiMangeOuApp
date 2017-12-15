import { Component, OnInit } from '@angular/core';

import { Validation } from '../validation';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  confirmationMessage: string;

  constructor(private groupeService: GroupeService) { }

  ngOnInit() {
  }

  add(nomGroupe: string, email: string): void {
    nomGroupe = nomGroupe.trim();
    email = email.trim();
    email = email.toLowerCase();
    if (!nomGroupe || !email) { return; }
    this.groupeService.addGroupe({ nomGroupe, email } as Validation)
      .subscribe(res => {
        this.confirmationMessage = `Un e-mail de validation de votre groupe vous a été envoyé sur ${email}`;
      });
  }

}
