import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from '../interfaces/info.interfaces';

@Injectable({
  providedIn: 'root'
})

export class InfoPageService {

  constructor( private http: HttpClient ) { }

  searchInfoPage(): Observable<Info>{
    return this.http.get<Info>('assets/infoPage.json')
  }

}
