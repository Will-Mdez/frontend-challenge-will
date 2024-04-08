import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit{
  searchForm!: FormGroup;
  username : string | undefined;
  constructor(private route : Router) { }

  ngOnInit(): void {
      this.searchForm = new FormGroup({
        username : new FormControl(
          null,
          [Validators.required]
        )
      })
  }

  sendUser(){
    this.username = this.searchForm.value.username;
    //console.log(this.username)

    this.route.navigate([ `user/${this.username}` ]);
  }
}
