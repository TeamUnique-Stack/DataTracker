// import { NgModule, ModuleWithProviders } from '@angular/core'
// import { OverlayModule } from '@angular/cdk/overlay';
// import { ToastComponent } from './toaster.component';
// import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toaster-config';

// @NgModule({
//   imports: [OverlayModule],
//   declarations: [ToastComponent],
//   entryComponents: [ToastComponent]
// })
// export class ToastModule {
//   public static forRoot(config = defaultToastConfig): ModuleWithProviders {
//         return {
//             ngModule: ToastModule,
//             providers: [
//                 {
//                     provide: TOAST_CONFIG_TOKEN,
//                     useValue: { ...defaultToastConfig, ...config },
//                 },
//             ],
//         };
//     }
//  }