import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../app/header/header.component'
import { NavbarComponent } from './navbar/navbar.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NavbarComponent,PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  parenTtoChild : string='parent data'
  //declare var for initgrate data in ui 
  message:string = '';


  @ViewChild(PostsListComponent) childmsg:any;

  constructor(){
    console.log(this.childmsg);
  }

  ngAfterViewInit(): void {
    console.log(this.childmsg);
    this.message = this.childmsg.ChildToParent;
  }
}
