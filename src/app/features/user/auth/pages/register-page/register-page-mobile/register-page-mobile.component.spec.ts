import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageMobileComponent } from './register-page-mobile.component';

describe('RegisterPageMobileComponent', () => {
  let component: RegisterPageMobileComponent;
  let fixture: ComponentFixture<RegisterPageMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
