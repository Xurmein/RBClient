import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Create.AccountComponent } from './create.account.component';

describe('Create.AccountComponent', () => {
  let component: Create.AccountComponent;
  let fixture: ComponentFixture<Create.AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create.AccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create.AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
