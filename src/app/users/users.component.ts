import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() hero:any ;
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
  }

}
