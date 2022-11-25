import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumShopComponent } from './album-shop.component';

describe('AlbumShopComponent', () => {
  let component: AlbumShopComponent;
  let fixture: ComponentFixture<AlbumShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
