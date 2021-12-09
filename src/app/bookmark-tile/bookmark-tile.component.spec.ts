import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTileComponent } from './bookmark-tile.component';

describe('BookmarkTileComponent', () => {
  let component: BookmarkTileComponent;
  let fixture: ComponentFixture<BookmarkTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
