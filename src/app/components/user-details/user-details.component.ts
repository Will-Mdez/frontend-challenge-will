import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  username : string | undefined;
  userDetail : any;
  constructor(
    private active: ActivatedRoute, 
    private github: ApiService,
    private route: Router
  ) {

  }


  ngOnInit(): void {
    this.active.params.subscribe(params => {
     this.username = params['id']; 
     console.log("params =", this.username)
    })

    this.github.getUser(this.username).subscribe({
      complete: () => { console.log("complete") },
      error : () => { 
        alert("You have entered an invalid username");
        // navigate back to home page
       },
      next : (data: any = []) => {
        this.userDetail = data;
        console.log(this.userDetail)
        console.log(this.userDetail.avatar_url)
      }
    });
  }
}
