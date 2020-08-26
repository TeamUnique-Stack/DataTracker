import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';
import { httpUrls as urls } from '../data-models/httpUrls';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  constructor(private http: HttpClient, private utilService: UtilService) { }

  //getting sales queue lsit
  getSalesQueue(postData) {
    return this.http
      .post(`${urls.BILLINGQUEUE}`, postData)
      .pipe(catchError(this.utilService.handleError));
  }
  //getting distribution queue list
  getDistQueue(postData) {
    return this.http
      .post(`${urls.DISTRIBUTIONQUEUE}`, postData)
      .pipe(catchError(this.utilService.handleError));
  }
  //get invoice status list
  getStatusList() {
    return this.http
      .get(`${urls.INVOCIESTATUS}`)
      .pipe(catchError(this.utilService.handleError));
  }
  //get userroute info
  getUserRouteInfo(userId) {
    let url = `${urls.USERROUTEINFO.replace('{UserId}', userId)}`;
    return this.http.get(url).pipe(catchError(this.utilService.handleError));
  }
  //get queue invoices
  getQueueStatus(queue) {
    return this.http
      .get(`${urls.QUEUESTATUS.replace('{queueName}', queue)}`)
      .pipe(catchError(this.utilService.handleError));
  }
  //get invoiceNumber
  getInvoiceNumber(userId, invoiceNumber) {
    const url = `${urls.INVOICENUMBER.replace('{UserId}', userId).replace('{InvoiceNumber}', invoiceNumber)}`;
    return this.http.get(url).pipe(catchError(this.utilService.handleError));
  }
  //route to integration
  routeToUsers(postData) {
    return this.http
      .post(`${urls.ROUTETO}`, postData)
      .pipe(catchError(this.utilService.handleError));
  }
  //get invoice details
  getInvoiceInfo(invoiceNumber) {
    return this.http
      .get(`${urls.GETINVOICEBYNUMBER.replace('{InvoiceNumer}', invoiceNumber)}`)
      .pipe(catchError(this.utilService.handleError));
  }
  //get alerts for user
  getUseralerts(userId) {
    return this.http
      .get(`${urls.GETALERTSBYUSERID.replace('{UserId}', userId)}`)
      .pipe(catchError(this.utilService.handleError));
  }
  //alert status
  getUpdatedAlertStatus(alertId, userId, status) {
    return this.http
      .get(`${urls.ALERTSTATUS.replace('{AlertId}', alertId).replace('{UserId}', userId).replace('{Status}', status)}`)
      .pipe(catchError(this.utilService.handleError));
  }
}
