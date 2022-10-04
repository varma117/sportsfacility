import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookfacilityComponent } from './bookfacility.component';

describe('BookfacilityComponent', () => {
  let component: BookfacilityComponent;
  let fixture: ComponentFixture<BookfacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookfacilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
