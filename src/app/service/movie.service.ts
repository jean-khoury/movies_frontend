import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  private moviesUrl: string;

  constructor(private http: HttpClient) {
    this.moviesUrl = 'http://localhost:4500/movies';
  }
  public findAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

}
