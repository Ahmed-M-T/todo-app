import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocontainerComponent } from './todocontainer.component';

describe('TodocontainerComponent', () => {
  let component: TodocontainerComponent;
  let fixture: ComponentFixture<TodocontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodocontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
