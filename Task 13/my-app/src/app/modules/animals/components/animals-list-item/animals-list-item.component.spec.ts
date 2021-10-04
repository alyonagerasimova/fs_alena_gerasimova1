import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsListItemComponent } from './animals-list-item.component';

describe('AnimalsListItemComponent', () => {
  let component: AnimalsListItemComponent;
  let fixture: ComponentFixture<AnimalsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
