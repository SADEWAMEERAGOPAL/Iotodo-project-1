import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/const/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
sendid !:Itodo
  todoArr: Array<Itodo>=[
       {
       todoid: "1768242635372",
       todoitem:"html-5"
      },
      {
        todoitem: 'css-3', 
        todoid: '1768242641168'
      },
      {
        todoitem: 'javascript',
         todoid: '1768242647678'
      },
      {
        todoitem: 'typescript',
         todoid: '1768242654382'
      }
    ]


  constructor() { }

  ngOnInit(): void {
  }

  OnTodoData(todo: Itodo){
     this.todoArr.push(todo)
  }
geteditid(edittodo:Itodo){
this.sendid=edittodo

}
onupdateobj(updateobj:Itodo){
  let findeindex= this.todoArr.findIndex(tod=>tod.todoid===updateobj.todoid)
  this.todoArr[findeindex]=updateobj
}
}
