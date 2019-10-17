import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersEditService {

  constructor(private http: HttpClient) {
  }

  updateUser(data: any) {

  }
}
