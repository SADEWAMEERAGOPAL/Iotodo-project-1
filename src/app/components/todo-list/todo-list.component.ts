import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/const/todo';
import { MatconfiramationComponent } from '../matconfiramation/matconfiramation.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
@Input() todoArr!: Array<Itodo>
@Output()sendeditid:EventEmitter<Itodo>=new EventEmitter<Itodo>()
 
  
  constructor(
     private _snackbar: MatSnackBar,
     private _dailog:MatDialog 
  ) { }

  ngOnInit(): void {
  }
  onremove(todo:Itodo){
    let t=todo.todoitem;
     let matcon=new MatDialogConfig();
    matcon.disableClose=true;
    matcon.autoFocus=true;
    matcon.width="30%";
    let dialogref=this. _dailog.open(MatconfiramationComponent,matcon);
    dialogref.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);
      if(result){
    let geti=this.todoArr.findIndex(t=>t.todoid===todo.todoid)
    console.log(geti);
    this.todoArr.splice(geti,1);
     this._snackbar.open(`todo ${todo.todoitem} item deleted Successfully`, 'Close', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      })
  }


})
  }
onedit(todo:Itodo){
   this.sendeditid.emit(todo)
}
}
