import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FavPhotosComponent } from './fav-photos.component';

describe('FavPhotosComponent', () => {
  let component: FavPhotosComponent;
  let fixture: ComponentFixture<FavPhotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
