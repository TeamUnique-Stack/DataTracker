import { Component, OnInit } from '@angular/core';
import{Router,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  islogin:boolean;
href:string;
showHeader: boolean = false;
pages: string[] = ['/login','/applicaton'];
  constructor(public router: Router ) {
  }

 

  ngOnInit() {

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // this.updateHeader();
        console.log('router.event');
        if(event.url.indexOf('/login') > -1 ||  event.urlAfterRedirects.indexOf('/login') > -1){
          this.showHeader = false;
        }
      }else{
        this.showHeader = true;
      }
  //   this.href = this.router.url;
  //   // console.log(this.router.url);
  //   if(this.pages.indexOf(this.href) > -1) {
  //     this.showHeader = false;
  //   }
  // }
    });
  }
  signOut(){
    localStorage.clear();
    localStorage.removeItem('');
    this.islogin = false;
    this.router.navigate(['/login']);

}
}
