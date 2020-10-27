import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export interface Info {
  c_mole?: string;
  a_mole?: string;
  c_circle?: string;
  ratio?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiDjangoService {

  info: Info = {
    c_mole: '',
    a_mole: '',
    c_circle: '',
    ratio: ''
  };


  DJANGO_API_SERVER: string = "http://192.168.43.135:8000";
  constructor(private http: HttpClient) { }

  public getClassified() {
    return this.http.get(`${this.DJANGO_API_SERVER}/classifier`, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
  }
  public getAsymmetry() {
    return this.http.get(`${this.DJANGO_API_SERVER}/asymmetry`, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
  }

  public getBorder() {
    return this.http.get(`${this.DJANGO_API_SERVER}/border`, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
  }

  public getColor() {
    return this.http.get(`${this.DJANGO_API_SERVER}/color`, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
  }

  public getCentroid() {
    return this.http.get(`${this.DJANGO_API_SERVER}/centroid`, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
  }

  public getDiameter(zoom) {
    return this.http.get(`${this.DJANGO_API_SERVER}/diameter`+'/?' + zoom, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
  }

  public isNevus() {
    return this.http.get(`${this.DJANGO_API_SERVER}/isNevus`+'/?', {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
  }

  public clearPic() {
    return this.http.get<string>(`${this.DJANGO_API_SERVER}/clearpic`);
  }
}