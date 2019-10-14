import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.css']
})

export class UsersGetComponent implements OnInit {

  //url = 'https://jsonplaceholder.typicode.com/users';
  url = 'http://localhost:8082/lawyer-catalog-service/lawyers';

  private dataSource = new MatTableDataSource<Lawyer>();
  private displayedColumns: string[] = ['fullName', 'description', 'cellPhone', 'website', 'languages', 'avgLawyerRating','actions'];
  private metadata: Object[] = [];
  private status = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    let options = {headers: headers, crossDomain: true};
    this.dataSource.paginator = this.paginator;
    this.httpClient.get(this.url, options).subscribe(response => {
      this.metadata = response['metadata'];
      this.status = this.metadata['status'];
      if (this.status == 'Success') {
        let tempArray: any[] = [];
        response['data'].forEach(function(item) {
          tempArray.push({
            fullName: item.FIRST_NAME + ', ' + item.LAST_NAME,
            description: item.DESCRIPTION,
            cellPhone: item.CELLPHONE,
            website: item.WEBSITE,
            languages: item.LANGUAGES,
            avgLawyerRating: item.AVG_LAWYER_RATING
          });
        });
        this.dataSource = new MatTableDataSource<Lawyer>(tempArray);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  ngAfterViewInit() {
  }
}

export class Lawyer {
  fullName: string;
  description: string;
  cellPhone: string;
  website: string;
  languages: string;
  avgLawyerRating: string;
}
