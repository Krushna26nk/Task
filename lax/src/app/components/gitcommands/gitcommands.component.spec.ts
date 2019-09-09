import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitcommandsComponent } from './gitcommands.component';

describe('GitcommandsComponent', () => {
  let component: GitcommandsComponent;
  let fixture: ComponentFixture<GitcommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitcommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
