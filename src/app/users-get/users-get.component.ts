import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {EditDialogComponent} from '../dialogs/edit/edit.dialog.component';

@Component({
  selector: 'users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.css']
})

export class UsersGetComponent implements OnInit {

  //url = 'https://jsonplaceholder.typicode.com/users';
  url = 'http://localhost:8082/lawyer-catalog-service/lawyers';

  private dataSource = new MatTableDataSource<Lawyer>();
  private displayedColumns: string[] = ['lawyerCode','fullName', 'description', 'cellPhone', 'website', 'languages', 'avgLawyerRating', 'actions'];
  private metadata: Object[] = [];
  private status = '';
  private shown = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {
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
            lawyerCode: item.lawyer_code,
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

  startEdit(lawyerCode: string,
            description: string,
            cellPhone: string,
            website: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {lawyerCode: lawyerCode, description: description, cellPhone: cellPhone, website: website},
      disableClose: true,
      autoFocus: true
    });
  }
}

export class Lawyer {
  lawyer_code: string
  fullName: string;
  description: string;
  cellPhone: string;
  website: string;
  languages: string;
  avgLawyerRating: string;
}
