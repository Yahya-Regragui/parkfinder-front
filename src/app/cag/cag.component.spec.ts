import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagComponent } from './cag.component';

describe('CagComponent', () => {
  let component: CagComponent;
  let fixture: ComponentFixture<CagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
