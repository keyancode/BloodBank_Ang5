import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListItemsComponent } from './app-list-items.component';

describe('AppListItemsComponent', () => {
  let component: AppListItemsComponent;
  let fixture: ComponentFixture<AppListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
