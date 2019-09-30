import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.css']
})
export class UsersGetComponent implements OnInit {

  url = "https://jsonplaceholder.typicode.com/users";

  private users = [];
  clicked: boolean;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.request('GET',
      this.url,
      {responseType: 'json'})
      .subscribe((res: any[]) => {
        this.clicked = true;
        this.users = res;
      });
  }

  ngAfterViewInit() {
  }

}
