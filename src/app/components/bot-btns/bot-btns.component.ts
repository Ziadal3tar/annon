import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bot-btns',
  templateUrl: './bot-btns.component.html',
  styleUrl: './bot-btns.component.scss'
})
export class BotBtnsComponent {
  @Output() list: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() menu: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  ifListOpen:Boolean = false
  ifMenuOpen:Boolean = false
  openList() {
    this.ifListOpen = !this.ifListOpen
    this.ifMenuOpen = !this.ifMenuOpen

    this.list.emit(this.ifListOpen);
  }
  openMenu() {
    this.ifMenuOpen = !this.ifMenuOpen
    this.ifListOpen = !this.ifListOpen

    this.menu.emit(this.ifMenuOpen);
  }
}
