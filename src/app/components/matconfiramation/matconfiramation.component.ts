import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-matconfiramation',
  templateUrl: './matconfiramation.component.html',
  styleUrls: ['./matconfiramation.component.css']
})
export class MatconfiramationComponent implements OnInit {

  constructor(
    private _matdialogref:MatDialogRef<MatconfiramationComponent>
  //  private _matDailogref=ma
  ) { }

  ngOnInit(): void {
  }
   onclose(flag:boolean){
    this._matdialogref.close(flag);
  }


}
