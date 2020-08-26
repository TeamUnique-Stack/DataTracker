import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//TODO 

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { AppComponent } from './app.component';
// //user-defined modules
// import { LoginModule } from './login/login.module';
// import { AppRoutingModule } from './app-routing.module';
// import { SharedModule } from './shared/shared.module';
// //Interceptors
// import { TokenInterceptor } from './auth/token.interceptor';
// import { AuthInterceptor } from './auth/auth-interceptor';
// import {NoCacheHeadersInterceptor} from './auth/nocache.interceptors';
// //Guards
// import { AuthGuard } from './shared/guards/auth.guard';
// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//     LoginModule,
//     SharedModule,
//     AppRoutingModule
//   ],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: TokenInterceptor,
//       multi: true
//     },
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AuthInterceptor,
//       multi: true
//     },
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: NoCacheHeadersInterceptor, 
//       multi: true
//     }
//   ],
//   bootstrap: [AppComponent],
//   exports: [],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class AppModule {}


