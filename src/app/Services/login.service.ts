import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:4200/products';

  constructor(private http: HttpClient) {
  }

  validateRegistration(EmailAddress, Password) {
    const obj = {
      EmailAddress,
      Password
    };

    this.http.request('post', `https://jsonplaceholder.typicode.com/users`, {
      responseType: 'json',
      body: obj
    }).subscribe(data =>
      alert('Authentication Success...')
    );
  }
}
