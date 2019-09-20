import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4200/products';

  constructor(private http: HttpClient) {
  }

  addUser(FirstName, LastName, EmailAddress, UserID, Password, UserDescription) {
    const obj = {
      FirstName,
      LastName,
      EmailAddress,
      UserID,
      Password,
      UserDescription
    };

    const params = new HttpParams({fromString: '_page=1&_limit=1'});

    this.http.request('get', `https://jsonplaceholder.typicode.com/users`, {
      responseType: 'json'
    }).subscribe(data =>
      alert("Success")
    );
  }

}
