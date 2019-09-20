import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.css']
})
export class UsersGetComponent implements OnInit {

  private users = [];
  clicked: boolean;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.request('GET',
      `https://jsonplaceholder.typicode.com/users`,
      {responseType: 'json'})
      .subscribe((res: any[]) => {
        this.clicked = true;
        this.users = res;
      });
  }

  ngAfterViewInit() {
  }

}
