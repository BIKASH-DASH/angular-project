import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data:any = [];

  constructor(private user: UserService) { 

    user.getData().subscribe(data => {
      this.data = data;
      console.log(data);
      

    })
  }

  ngOnInit(): void {
  }

}
