import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:{title:string, description:any}[]=[];

  constructor() {

// load the saved todos from local storage
const savedTodos = localStorage.getItem('todos');

if(savedTodos){
this.todos = JSON.parse(savedTodos)

}
   }


   // function to get all task
getTodos(){
  return this.todos;
}

// adding items to local storage function

addTodo(title:string, description:string){
this.todos.push({title, description});
this.saveTodos();

}

// function to save into the localstorage
saveTodos(){
  localStorage.setItem('todos',JSON.stringify(this.todos));
}

// function to delete 
deleteTodo(index:number){
  if (this.todos[index]){
    this.todos.splice(index,1);
    this.saveTodos();

  }
}


// function to edit items
editTodo( index:number,newTitle:string, newDescription:string ){
  if(this.todos[index]){
    this.todos[index]= {title:newTitle, description:newDescription}
  this.saveTodos();
  }
}


}
