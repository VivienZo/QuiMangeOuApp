import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionSearchComponent } from './proposition-search.component';

describe('PropositionSearchComponent', () => {
  let component: PropositionSearchComponent;
  let fixture: ComponentFixture<PropositionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
