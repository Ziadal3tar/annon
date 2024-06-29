import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrl: './side-list.component.scss'
})
export class SideListComponent {
  @Output() closeX: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  close() {

    this.closeX.emit(false);
  }
  openUl(event:any,id:any){
    document.getElementById('ul1')?.classList.remove('active')
    document.getElementById('ul2')?.classList.remove('active')
    document.getElementById('ul3')?.classList.remove('active')
    document.getElementById('ul4')?.classList.remove('active')

    let classes = Array.from(event.target?.classList || []);
    let hasBiPlus = classes.filter((className) => className === 'bi-plus');
console.log(hasBiPlus);
if (hasBiPlus.length!=0) {
  let minus = document.getElementsByClassName('bi-dash')
for (let i = 0; i < minus.length; i++) {
  const element = minus[i];
element.classList.remove('bi-dash')
element.classList.add('bi-plus')
}
  event.target?.classList.replace('bi-plus','bi-dash')
document.getElementById(id)?.classList.add('active')

}else{
  event.target?.classList.remove('bi-dash')
  event.target?.classList.add('bi-plus')

}
  }
}
