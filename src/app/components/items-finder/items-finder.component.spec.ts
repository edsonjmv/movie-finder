import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFinderComponent } from './items-finder.component';

describe('ItemsFinderComponent', () => {
  let component: ItemsFinderComponent;
  let fixture: ComponentFixture<ItemsFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
