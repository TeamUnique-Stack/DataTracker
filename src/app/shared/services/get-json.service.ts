// import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { UtilService } from './util.service';
// import { environment } from '../../../environments/environment';


// @Injectable()
// export class GetJsonService {

//   constructor(private http: HttpClient, private utilService: UtilService) { }

//   public getJSON(path: string, fileName: string) {
//     return this.http.get(environment.BASE_JSON_API + path + fileName)
//       .pipe(catchError(this.utilService.handleError));
//   }
//   public getStaticJSON(path: string, fileName: string) {
//     return this.http.get(path + fileName)
//       .pipe(catchError(this.utilService.handleError));
//   }
//   private handleError(error: any) {
//     const errMsg = (error && error.message) ? error.message :
//       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     console.error(errMsg); // log to console instead
//     return Observable.throw(errMsg);
//   }
// }
