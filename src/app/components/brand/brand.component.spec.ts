import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandComponent } from './brand.component';

describe('CategoryComponent', () => {
  let component: BrandComponent;
  let fixture: ComponentFixture<BrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
