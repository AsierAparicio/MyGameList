import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListGuardadosComponent } from './game-list-guardados.component';

describe('GameListGuardadosComponent', () => {
  let component: GameListGuardadosComponent;
  let fixture: ComponentFixture<GameListGuardadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListGuardadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListGuardadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
