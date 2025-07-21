import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageDesktopComponent } from './login-page-desktop.component';

describe('LoginPageDesktopComponent', () => {
  let component: LoginPageDesktopComponent;
  let fixture: ComponentFixture<LoginPageDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageDesktopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
