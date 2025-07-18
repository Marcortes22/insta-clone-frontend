import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageMobileComponent } from './login-page-mobile.component';

describe('LoginPageMobileComponent', () => {
  let component: LoginPageMobileComponent;
  let fixture: ComponentFixture<LoginPageMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
