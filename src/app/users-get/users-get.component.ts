import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.css']
})
export class UsersGetComponent implements OnInit {

  //url = 'https://jsonplaceholder.typicode.com/users';
  url = 'http://localhost:8082/lawyer-catalog-service/lawyers';

  private users: any[] = [];
  private metadata: any[] = [];
  status: any;
  page: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    let options = {headers: headers, crossDomain: true};

    this.httpClient.get(this.url, options).subscribe(response => {
      this.metadata = response['metadata'];
      this.status = this.metadata['status'];
      if (this.status == 'Success') {
        this.page = 1;
        this.users = response['data'];
      }
    });
  }

  ngAfterViewInit() {
  }

}
