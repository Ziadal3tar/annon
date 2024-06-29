import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotBtnsComponent } from './bot-btns.component';

describe('BotBtnsComponent', () => {
  let component: BotBtnsComponent;
  let fixture: ComponentFixture<BotBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotBtnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
