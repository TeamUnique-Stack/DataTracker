// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AnimationEvent } from '@angular/animations';

// import { ToastData } from './toaster-config';
// import { ToastRef } from './toaster-ref';
// import { toastAnimations, ToastAnimationState } from './toaster-animation';

// @Component({
//   selector: 'app-toaster',
//   templateUrl: './toaster.component.html',
//   styleUrls: ['toaster.component.scss'],
//   animations: [toastAnimations.fadeToast],
// })
// export class ToastComponent implements OnInit, OnDestroy {
//   animationState: ToastAnimationState = 'default';
//   iconType: string;

//   private intervalId: any;
//   private count = 1;
//   constructor(
//     readonly data: ToastData,
//     readonly ref: ToastRef,
//   ) {
//     this.iconType = data.type === 'success' ? 'done' : data.type;
//   }

//   ngOnInit() {
//     this.intervalId = setTimeout(() => this.animationState = 'closing', 2000);
//   }

//   ngOnDestroy() {
//     clearTimeout(this.intervalId);
//   }

//   close() {
//     this.ref.close();
//   }

//   onFadeFinished(event: AnimationEvent) {
//     const { toState } = event;
//     const isFadeOut = (toState as ToastAnimationState) === 'closing';
//     const itFinished = this.animationState === 'closing';

//     if (isFadeOut && itFinished) {
//       this.close();
//     }
//   }




// }
