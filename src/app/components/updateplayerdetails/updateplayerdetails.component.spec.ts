import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateplayerdetailsComponent } from './updateplayerdetails.component';

describe('UpdateplayerdetailsComponent', () => {
  let component: UpdateplayerdetailsComponent;
  let fixture: ComponentFixture<UpdateplayerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateplayerdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateplayerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
