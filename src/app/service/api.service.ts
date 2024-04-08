import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.github.com/search/';
  urlSearch = 'https://api.github.com/users/';
  
  constructor(private http: HttpClient) {}
 

  getIssues(repo: string): Observable<any> {
    return this.http.get(this.apiUrl +`${repo}`);
  }
  
  getUser(username: string | undefined) {
    return this.http.get(this.urlSearch + username);
  }


  searchCode(query: string): Observable<any> {
    const token = '< YOUR-TOKEN >'; // Reemplaza <YOUR-TOKEN> con tu token de acceso personal de GitHub
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    });

    return this.http.get<any>('https://api.github.com' + query, { headers });
  }

}
