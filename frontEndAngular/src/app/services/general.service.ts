//angular
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//import {HttpErrorResponse} from '@angular/common/http';
//services
//component
import {API} from '../../environments/api';

@Injectable({
  providedIn: 'root'
})

export class generalService {

  constructor(private router: Router,
    private http:HttpClient,
) { }



  getProvider(id:number) {
      return this.http.get( API.SERVER + API.GET_PROVIDER+"id="+id);
  }

  getProviders() {
    console.log( API.SERVER + API.GET_PROVIDERS)
    return this.http.get( API.SERVER + API.GET_PROVIDERS);
  }

  createProvider(data: any) {
    console.log("create provider")
    const body = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('phone', data.phone)
      .set('description', data.description)
      .set('status', data.status)
    ;

    return this.http.post( API.SERVER + API.POST_CREATEPROVIDERS, body);
  }

  updateProvider(data: any) {
    const body = new HttpParams()
      .set('name', data.name)
      .set('email', data.email)
      .set('phone', data.phone)
      .set('description', data.description)
      .set('status', data.status)
    ;
    return this.http.put( API.SERVER + API.PUT_PROVIDER+data.id, body);
  }

  updateStatus(id:number) {
    const body = new HttpParams()
      .set('status', 0)
    ;

    return this.http.put( API.SERVER + API.PUT_PROVIDER+id, body);
  }


  destroyProvider(id:number) {
    return this.http.delete( API.SERVER + API.DELETE_PROVIDER+id);
  }

}
