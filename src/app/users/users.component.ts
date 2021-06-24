import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() hero:any ;
  @Output() parentFunction:EventEmitter<any> = new EventEmitter();
  data = [
  {
    name:"bikash",
    email:"biaksh@gmail.com"
  },
    {
      name: "dash",
      email: "dash@gmail.com"
    },
];
  constructor() { }

  ngOnInit(): void {
    this.parentFunction.emit("vikash")
  }

  SendData(arg:any): void {
    this.parentFunction.emit(arg)
    
  }

}
