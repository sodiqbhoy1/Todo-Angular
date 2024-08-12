import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

title="Todo-List"
  todos:any=[];
  newTitle="";
  index:number = 0;
    newDescription="";
  
    constructor (public userService:TodoService){
  
  this.todos= this.userService.getTodos();
  
    }
  
    // add function button
  
  addTodo(){
    if (this.newTitle && this.newDescription){
      this.userService.addTodo(this.newTitle, this.newDescription);
      this.newTitle='';
      this.newDescription='';
      this.todos = this.userService.getTodos();
    }
  }
  
  // edit button function
  
  editTodo(index:number, newTitle:string, newDescription:string){
    this.userService.editTodo(index, newTitle, newDescription);
    this.newTitle='';
      this.newDescription='';
  this.todos= this.userService.getTodos();
  
  }
  
  
  // function to delete items
  deleteTodo(index:number){
    this.userService.deleteTodo(index);
    this.todos = this.userService.getTodos();
  }
  


}
