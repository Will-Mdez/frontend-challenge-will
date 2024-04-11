import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-code-search',
  templateUrl: './code-search.component.html',
  styleUrl: './code-search.component.css'
})
export class CodeSearchComponent implements OnInit {
  data: any[] = [];

  showModal = false;
  modalTitle: string = '';

  constructor(private githubApiService: ApiService) { }

  ngOnInit(): void {
    this.githubApiService.searchCode('/search/code?q=Q').subscribe(response => {
      this.data = response.items;
      console.log(this.data);
    });
  }

  selectedIssue: any;

  toggleModal(issue: any) { // Recibe el problema seleccionado como argumento
    this.selectedIssue = issue; // Almacena el problema seleccionado
    this.showModal = !this.showModal;
  }

}
