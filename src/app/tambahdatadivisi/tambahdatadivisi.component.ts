import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-tambahdatadivisi',
  templateUrl: './tambahdatadivisi.component.html',
  styleUrls: ['./tambahdatadivisi.component.css']
})
export class TambahdatadivisiComponent implements OnInit {
  division: any;

  constructor(private divisionService:DivisionService) { }
  addDivisions =new FormGroup({
    nama: new FormControl( '' ),
    description: new FormControl( '' )
  });
  ngOnInit(): void {
}
SaveData(){
  // console.log( this.addDivisions.value)
  this.division.SaveDivisionData(this.addDivisions.value)
}
}
