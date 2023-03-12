import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  //2. create the decorate that you want to catch the value pass from parent component, then go to parent component.html to modify app-child
  @Input()
  fn:string=""
//we put fn:string after input() because this input() carry the input from parent component, and then put this input to fn

  @Input()
  ln:string=""


  //5. here to start to pass value from child to parent component, then go to child.component.html
  @Output()
  emitFullName : EventEmitter<string> = new EventEmitter();

  //7. create this function, then go to parent.component.html to call this custom event
  sendFullName(){
    this.emitFullName.emit(this.fn + " " + this.ln)
  }

}
