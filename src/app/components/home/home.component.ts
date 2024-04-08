import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  data : any[]= [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.getIssues('issues?q=repo:twbs/bootstrap');
  }

  getIssues(repo: string): void {
    this.apiService.getIssues(repo)
      .subscribe((data: any) => {
        this.data = data.items;
      })
    
    }
  


}
