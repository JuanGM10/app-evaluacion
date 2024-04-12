import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MovieModel } from '../models/movie-model';
import { ResponseModel } from '../models/response-model';


@Injectable({ providedIn: 'root' })
export class MovieService {

  moviesChange$ = new Subject<MovieModel[]>();
  private apiUrl = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
  constructor(private http: HttpClient) { }


  getMovies(): Observable<ResponseModel<MovieModel[]>> {
    return this.http.get<ResponseModel<MovieModel[]>>(this.apiUrl, {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'c487827d5amsh114e6bbcfb8fd13p1b8470jsn83bbec4551eb',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
      })
    });
  }

}
