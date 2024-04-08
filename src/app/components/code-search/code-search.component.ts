import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-code-search',
  templateUrl: './code-search.component.html',
  styleUrl: './code-search.component.css'
})
export class CodeSearchComponent implements OnInit {
  data: any[] = [];

  constructor(private githubApiService: ApiService) { }

  ngOnInit(): void {
    this.githubApiService.searchCode('/search/code?q=Q').subscribe(response => {
      this.data = response.items;
      console.log(this.data);
    });
  }

}
