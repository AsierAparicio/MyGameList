import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListPersonalComponent } from './game-list-personal.component';

describe('GameListPersonalComponent', () => {
  let component: GameListPersonalComponent;
  let fixture: ComponentFixture<GameListPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
