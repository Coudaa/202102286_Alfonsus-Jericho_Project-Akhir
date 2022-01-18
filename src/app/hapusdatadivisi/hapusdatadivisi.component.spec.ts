import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusdatadivisiComponent } from './hapusdatadivisi.component';

describe('HapusdatadivisiComponent', () => {
  let component: HapusdatadivisiComponent;
  let fixture: ComponentFixture<HapusdatadivisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HapusdatadivisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusdatadivisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
