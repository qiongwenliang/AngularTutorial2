import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angulartutorial2';
  value = 'angular'

  //1. after creating these properties that you want to pass to child component, go to child.component.ts
  firstName="Smith"
  lastName="Zhang"
 
  employeeFullName=""
  //9. complete the printFullName function
  printFullName(data:string){
    this.employeeFullName = data;
  }
}
