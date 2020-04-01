import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertModalComponent } from './insert-modal.component';

describe('InsertModalComponent', () => {
  let component: InsertModalComponent;
  let fixture: ComponentFixture<InsertModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
