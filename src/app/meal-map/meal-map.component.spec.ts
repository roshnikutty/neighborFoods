import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealMapComponent } from './meal-map.component';

describe('MealMapComponent', () => {
  let component: MealMapComponent;
  let fixture: ComponentFixture<MealMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
