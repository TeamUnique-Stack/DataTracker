// import { Injectable } from '@angular/core';
// import { throwError } from 'rxjs';
// import { HttpErrorResponse } from '@angular/common/http';
// import * as moment from 'moment';
// import * as momentTimezone from 'moment-timezone';

// @Injectable({
//   providedIn: 'root'
// })
// export class UtilService {
//   constructor() {}

//   dateFormat(date, momentFormat): string {
//     if (date === null) {
//       return '';
//     }
//     const new_date = moment(date);
//     var dateTimeZone = momentTimezone(new_date);
//     var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//     return new_date.isValid() ? dateTimeZone.tz(timeZone).format(momentFormat) : '';    
//   }

//   getActivityDateFormat(date, momentFormat): string {
//     if (date === null) {
//       return '';
//     }
//     const new_date = moment(date);
//     var dateTimeZone = momentTimezone(new_date);
//     var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//     return new_date.isValid() ? dateTimeZone.tz(timeZone).format(momentFormat) : ''; 
//   }

//   public restrictLeadingSpace(event) {
//     const strInput = event.target.value;
//     if (!strInput.length) {
//       event.preventDefault();
//     }
//   }
//   // numbers on top of keyboard ( 0 - 9 ) : 48 - 57
//   public isSpecialCharacter(event) {
//     {
//       let splChar;
//       splChar = event.charCode || event.keyCode;
//       return (
//         (splChar > 64 && splChar < 91) ||
//         (splChar > 96 && splChar < 123) ||
//         splChar == 8 ||
//         splChar == 32 ||
//         (splChar >= 48 && splChar <= 57)
//       );
//     }
//   }
  
//  keyUp(event: any) {
//   let pattern = /[a-zA-Z]{2}\d/;
//   event = event || window.event;
//   var newValue = event.target.value || '';
//   if(newValue.length > 2){
//      if (newValue.match(pattern)) {
//      event.target.value = newValue;
//   } else {
//       event.target.value = "";
//   }
//   }
// }

//   public getIconPath(obj) {
//     let statusName = obj.invoiceStatus || obj.invoiceStatusName;
//     if (statusName === 'Error') {
//       return 'assets/images/pending.png';
//     } else if (statusName === 'On Hold') {
//       return 'assets/images/alert.png';
//     } else if (statusName === 'New') {
//       return 'assets/images/status-new.png';
//     } else if (statusName === 'Approved') {
//       return 'assets/images/success-alt.png';
//     } else if (statusName === 'Declined') {
//       return 'assets/images/status-declined.png';
//     } else if (statusName === 'Close' || statusName === 'Void') {
//       return 'assets/images/status-cancelled.png';
//     } else if (statusName === 'Distribute') {
//       return 'assets/images/status-distributed.png';
//     } else if(statusName === 'Open'){
//       return 'assets/images/status-open.svg';
//     } else if(statusName === 'File'){
//       return 'assets/images/status-filed.svg';
//     } else {
//       return '';
//     }
//   }

//   public getStatusColor(obj) {
//     let statusName = obj.invoiceStatus || obj.invoiceStatusName;
//     if (statusName === 'Approved' || statusName === 'Distribute' || statusName === 'File') {
//       return 'approved';
//     } else if (
//       statusName === 'Declined' ||
//       statusName === 'Error' ||
//       statusName === 'Close' ||
//       statusName === 'Void'
//     ) {
//       return 'pending';
//     } else if (statusName === 'On Hold') {
//       return 'onHold';
//     } else if (statusName === 'New' || statusName === 'Open') {
//       return 'new';
//     } else {
//       return 'otherStatus';
//     }
//   }

//   //phone no format in table
//   getPhoneNoFormat(phoneno): number {
//     let formattedNumber = phoneno;
//     let area = phoneno.substring(0, 3);
//     let front = phoneno.substring(4, 7);
//     let end = phoneno.substring(8, 12);
//     if (front) {
//       formattedNumber = '(' + area + ') ' + front;
//     }
//     if (end) {
//       formattedNumber += '-' + end;
//     }
//     return formattedNumber;
//   }

//   public getAgeClass(age) {
//     if (age > 3) {
//       return 'pending';
//     } else {
//       return 'otherStatus';
//     }
//   }

//   public handleError(error: HttpErrorResponse) {
//     return throwError(error.error);
//   }
// }
