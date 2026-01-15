import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/const/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

   @ViewChild('todoForm') todoForm!: NgForm

  @Output() emittododata: EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  OnAddTodo() {
    if (this.todoForm.valid) {
      let gettodoObj = {
        todoitem: this.todoForm.value.todoitem,
        todoid: Date.now().toString()
      }



      this.emittododata.emit(gettodoObj)
      this.todoForm.reset()
      this._snackbar.open('new todo item Added Successfully', 'Close', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })
    }

  }
}

