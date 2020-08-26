import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from 'src/app/shared/data-models/loader';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  show = false;
  private subscription: Subscription;
  constructor(
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
