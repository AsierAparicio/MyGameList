import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListSeguidosComponent } from './game-list-seguidos.component';

describe('GameListSeguidosComponent', () => {
  let component: GameListSeguidosComponent;
  let fixture: ComponentFixture<GameListSeguidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListSeguidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListSeguidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
