import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturecampsComponent } from './futurecamps.component';

describe('FuturecampsComponent', () => {
  let component: FuturecampsComponent;
  let fixture: ComponentFixture<FuturecampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturecampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturecampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
