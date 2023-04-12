import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSpotsComponent } from './bg-spots.component';

describe('BgSpotsComponent', () => {
  let component: BgSpotsComponent;
  let fixture: ComponentFixture<BgSpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgSpotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
