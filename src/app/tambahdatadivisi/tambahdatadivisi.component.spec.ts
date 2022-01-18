import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahdatadivisiComponent } from './tambahdatadivisi.component';

describe('TambahdatadivisiComponent', () => {
  let component: TambahdatadivisiComponent;
  let fixture: ComponentFixture<TambahdatadivisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahdatadivisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahdatadivisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
