import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tache } from '../../taches/shared/interfaces/tache';
import { SharedServicesModule } from './shared-services.module';

@Injectable({
  providedIn: SharedServicesModule,
})
export class TachesService {

  private static _TACHE_API_URL: string = environment.apiUrl + "/taches"

  private _index = 3

  private tachesSubject: BehaviorSubject<Tache[]> = new BehaviorSubject([])
  taches$: Observable<Tache[]> = this.tachesSubject.asObservable()

  constructor(private httpClient: HttpClient) {
  }

  create(tache: Tache): Observable<number> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    tache.id = ++this._index

    return this.httpClient.post<Tache>(TachesService._TACHE_API_URL, tache, { headers }).pipe(
      map(tache => { return tache.id }),
      retry(3),
      catchError(this.manage)
    )
  }

  delete(id: number): void {
    this.httpClient.delete(TachesService._TACHE_API_URL + "/" + id).pipe(
      catchError(this.manage)
    ).subscribe(() => {
      this.readAll()
    })
  }

  read(id: number): Observable<Tache> {
    return this.httpClient.get<Tache>(TachesService._TACHE_API_URL + "/" + id).pipe(
      retry(3),
      catchError(this.manage)
    )
  }

  readAll(): void {
    this.getAll().subscribe(
      taches => this.tachesSubject.next(taches)
    );
  }

  getAll(): Observable<Tache[]> {
    return this.httpClient.get<Tache[]>(TachesService._TACHE_API_URL).pipe(
      retry(3),
      catchError(this.manage)
    )
  }

  update(tache: Tache): void {
    this.httpClient.patch(TachesService._TACHE_API_URL + "/" + tache.id, tache).pipe(
      retry(3),
      catchError(this.manage)
    ).subscribe()
  }

  filter(filter: string): void {
    if (filter == "all") {
      this.readAll()
    } else {
      this.getAll().subscribe(taches => {
        this.tachesSubject.next(
          taches.filter(t => t.name.concat(t.detail).toLowerCase().indexOf(filter) != -1)
        );
      })
    }
  }

  private manage(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('Error front', error)
    } else {
      console.log("Erreur back", error)
    }
    return throwError('Erreur innatendue')
  }

}
