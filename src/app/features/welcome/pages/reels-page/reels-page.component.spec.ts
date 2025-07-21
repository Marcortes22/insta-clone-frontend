import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelsPageComponent } from './reels-page.component';

describe('ReelsPageComponent', () => {
  let component: ReelsPageComponent;
  let fixture: ComponentFixture<ReelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReelsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
