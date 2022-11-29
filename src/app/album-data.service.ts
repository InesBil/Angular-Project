import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Album } from './album-list/Album';

const URL= 'https://62b8bb9f03c36cb9b7cb290f.mockapi.io/api/v1/discography';

@Injectable({
  providedIn: 'root'
})

export class AlbumDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Album[]>{
    
    return this.http.get<Album[]>(URL)
    .pipe(
      tap((albums: Album[]) => albums.forEach(album => album.quantity = 0))
    );
  }
}
