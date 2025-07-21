import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageDesktopComponent } from './register-page-desktop.component';

describe('RegisterPageDesktopComponent', () => {
  let component: RegisterPageDesktopComponent;
  let fixture: ComponentFixture<RegisterPageDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageDesktopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
