import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apollo} from 'apollo-angular';

@Injectable()
export class HomeService extends BaseService {

  constructor(private http: HttpClient, private _apollo: Apollo) {
    super();
  }

}
