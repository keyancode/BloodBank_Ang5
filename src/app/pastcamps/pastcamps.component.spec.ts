import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastcampsComponent } from './pastcamps.component';

describe('PastcampsComponent', () => {
  let component: PastcampsComponent;
  let fixture: ComponentFixture<PastcampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastcampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastcampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
