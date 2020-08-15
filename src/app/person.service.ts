import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Iperson } from "./person";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  private _url: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}

  // getPersonDetails() {
  //   return [
  //     { id: 1, name: "John", age: 30 },
  //     { id: 2, name: "Raj", age: 27 },
  //     { id: 3, name: "Elena", age: 20 },
  //     { id: 4, name: "Emma", age: 24 },
  //   ];
  // }

  getPersonDetails(): Observable<Iperson[]> {
    return this.http
      .get<Iperson[]>(this._url)
      .pipe(catchError((err: any) => this.errorHandler(err)));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
