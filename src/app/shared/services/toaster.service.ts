// import { Injectable, Injector } from '@angular/core';
// import { Overlay } from '@angular/cdk/overlay';
// import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
// import { ToastComponent } from '../../core/toaster/toaster.component';
// import { ToastData } from '../../core/toaster/toaster-config';
// import { ToastRef } from '../../core/toaster/toaster-ref';

// @Injectable()
// export class ToastService {
//   private lastToast: ToastRef;
//   private count = 1;

//   constructor(
//     private overlay: Overlay,
//     private parentInjector: Injector,
//   ) { }

//     show(data: ToastData) {
//     const positionStrategy = this.getPositionStrategy();
//     const overlayRef = this.overlay.create({ positionStrategy });

//     const toastRef = new ToastRef(overlayRef);
//     this.lastToast = toastRef;

//     const injector = this.getInjector(data, toastRef, this.parentInjector);
//     const toastPortal = new ComponentPortal(ToastComponent, null, injector);
//     overlayRef.attach(toastPortal);

//     return toastRef;
//   }

//   getPositionStrategy() {
//     return this.overlay.position()
//       .global()
//   }

//   getPosition() {
//     const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
//     const position = lastToastIsVisible 
//       ? this.lastToast.getPosition().bottom
//       : -20;

//     return position + 'px';
//   }

//   getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
//     const tokens = new WeakMap();

//     tokens.set(ToastData, data);
//     tokens.set(ToastRef, toastRef);

//     return new PortalInjector(parentInjector, tokens);
//   }

//   showToast(_data) {
//     this.show({
//       text : _data,
//       type: 'success',
//     });
//   }

// }
  