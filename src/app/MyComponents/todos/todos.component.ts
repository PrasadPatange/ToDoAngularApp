import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"; //

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  
  todos: Todo[];  //Array
  constructor() {
    // initialize- if website reload
     this.localItem = localStorage.getItem("todos"); //get items from the localstorage i.e. item store in local storage
    if(this.localItem == null)
    {
    this.todos = [];  //Empty
    }
    else{
      this.todos = JSON.parse(this.localItem); 
    } 
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log(todo);  //Use for Debugging
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);  //splice(index,deleteCount no) : Delete Element using index number
    localStorage.setItem("todos",JSON.stringify(this.todos)); //To Store in LocalStorage
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);  //Add
    localStorage.setItem("todos",JSON.stringify(this.todos)); //To Store in LocalStorage
  }
  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active =  ! this.todos[index].active; 
    localStorage.setItem("todos",JSON.stringify(this.todos)); //To Store in LocalStorage
   }

 
}
