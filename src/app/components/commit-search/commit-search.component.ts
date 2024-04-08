import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-commit-search',
  templateUrl: './commit-search.component.html',
  styleUrl: './commit-search.component.css'
})
export class CommitSearchComponent  implements OnInit {
  data: any[] = [];

  constructor(private githubApiService: ApiService) { }

  ngOnInit(): void {
    this.githubApiService.searchCode('/search/commits?q=Q').subscribe(response => {
      this.data = response.items;
    });
  }

}
