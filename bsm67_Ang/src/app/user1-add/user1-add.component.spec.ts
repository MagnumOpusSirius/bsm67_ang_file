import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User1AddComponent } from './user1-add.component';

describe('User1AddComponent', () => {
  let component: User1AddComponent;
  let fixture: ComponentFixture<User1AddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [User1AddComponent]
    });
    fixture = TestBed.createComponent(User1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
