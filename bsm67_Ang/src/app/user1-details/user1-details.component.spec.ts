import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User1DetailsComponent } from './user1-details.component';

describe('User1DetailsComponent', () => {
  let component: User1DetailsComponent;
  let fixture: ComponentFixture<User1DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [User1DetailsComponent]
    });
    fixture = TestBed.createComponent(User1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
