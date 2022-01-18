import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdatadivisiComponent } from './editdatadivisi.component';

describe('EditdatadivisiComponent', () => {
  let component: EditdatadivisiComponent;
  let fixture: ComponentFixture<EditdatadivisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdatadivisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdatadivisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
