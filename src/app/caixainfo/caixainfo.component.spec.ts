import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixainfoComponent } from './caixainfo.component';

describe('CaixainfoComponent', () => {
  let component: CaixainfoComponent;
  let fixture: ComponentFixture<CaixainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixainfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
