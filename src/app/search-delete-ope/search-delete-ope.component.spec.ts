import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeleteOpeComponent } from './search-delete-ope.component';

describe('SearchDeleteOpeComponent', () => {
  let component: SearchDeleteOpeComponent;
  let fixture: ComponentFixture<SearchDeleteOpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDeleteOpeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeleteOpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
