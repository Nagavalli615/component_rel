import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output-eventemitter',
  standalone: true,
  imports: [],
  templateUrl: './output-eventemitter.component.html',
  styleUrl: './output-eventemitter.component.css'
})
export class OutputEventemitterComponent {
fromchild : string = 'child to parent with click event ';

@Output() messageEvent = new EventEmitter();

sendmessagetoparent(){
  console.log('button click');
  this.messageEvent.emit(this.fromchild);
}

}
