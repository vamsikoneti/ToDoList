import { Component, OnInit } from '@angular/core';
import { Todo} from './../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos:Todo[];
  

  constructor() { }

  ngOnInit(): void {

    this.todos = 
    [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: true
      }
    ]

  }

}
