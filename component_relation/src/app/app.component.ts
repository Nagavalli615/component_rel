import { AfterViewInit, Component, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { OutputEventemitterComponent } from './output-eventemitter/output-eventemitter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PostsListComponent,OutputEventemitterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
 parentTochild: string = 'parent data'

 @ViewChild(PostsListComponent) fromchild:any;
 //to render child data on ui access fromchildObj
 child:string = '';

 constructor(){
  console.log(this.fromchild)
 }
 ngAfterViewInit(): void {
   console.log(this.fromchild)
   this.child = this.fromchild.childToParent;
 }
 //output_eventemitter -- fromchild
 displayonui: string = '';
 recivemessagefromchild(message:string){
  console.log(message)
  this.displayonui = message;
 }

}
