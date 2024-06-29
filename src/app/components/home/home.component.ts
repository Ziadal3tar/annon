import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

sideList:Boolean=false
sideMenu:Boolean=false



openMenu(data:any){
  this.sideMenu = data
  this.sideList = false
}
openList(data:any){
  this.sideList = data
  this.sideMenu = false
}


}
