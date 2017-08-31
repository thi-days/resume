import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesSectionComponent } from './prices-section.component';

describe('PricesSectionComponent', () => {
  let component: PricesSectionComponent;
  let fixture: ComponentFixture<PricesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
