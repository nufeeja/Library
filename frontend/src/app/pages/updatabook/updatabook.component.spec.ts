import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatabookComponent } from './updatabook.component';

describe('UpdatabookComponent', () => {
  let component: UpdatabookComponent;
  let fixture: ComponentFixture<UpdatabookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatabookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatabookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
