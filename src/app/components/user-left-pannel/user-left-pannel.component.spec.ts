import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeftPannelComponent } from './user-left-pannel.component';

describe('UserLeftPannelComponent', () => {
  let component: UserLeftPannelComponent;
  let fixture: ComponentFixture<UserLeftPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLeftPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLeftPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
