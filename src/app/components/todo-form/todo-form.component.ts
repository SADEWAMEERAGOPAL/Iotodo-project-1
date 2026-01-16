import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/const/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() geteditid!: Itodo;
  @ViewChild('todoForm') todoForm!: NgForm;
  @Output() emittododata: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() emitupdtedobj: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  iseditbtn: boolean = false;

  constructor(private _snackbar: MatSnackBar) {}
  ngOnChanges(changes: SimpleChanges) {
    if (!!changes['geteditid']['currentValue']) {
      this.todoForm.form.patchValue(changes['geteditid']['currentValue']);
      this.iseditbtn = true;
    }
  }

  ngOnInit() {}

  OnAddTodo() {
    if (this.todoForm.valid) {
      let gettodoObj = {
        todoitem: this.todoForm.value.todoitem,
        todoid: Date.now().toString(),
      };
      this.emittododata.emit(gettodoObj);
      this.todoForm.reset();
      this._snackbar.open('new todo item Added Successfully', 'Close', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
  }

  Onupdate() {
    if(this.todoForm.valid){

    }
    let updateobj={...this.todoForm.value,
      todoid: this.geteditid.todoid,}
    this.emitupdtedobj.emit(updateobj);
    this.iseditbtn = false;
    this.todoForm.reset();
    this._snackbar.open('todo item updated SuccessFully','close',{
      duration:2000,
      verticalPosition:'top',
      horizontalPosition:'center'
    })
  }
}
