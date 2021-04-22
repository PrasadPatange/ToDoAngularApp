import { Input } from '@angular/core';  //import input for <p> written in todo-item.component.html
import { Output } from '@angular/core';
import { Component, OnInit,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;  //decorate
  @Input() i: number; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();  //Create Custom/Own Event
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();  //Create Custom/Own Event
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered");
  }
  onCheckboxClick(todo){
    console.log(todo);
    this.todoCheckbox.emit(todo);
    console.log(todo);


  }

}