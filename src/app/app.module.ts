import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestDemoComponent } from './desktop-front/page/request-demo/request-demo.component';
import { AppComponent } from './app.component';
import { DesktopFrontComponent } from './desktop-front/desktop-front.component';
import { HomePageHeroAreaComponent } from './desktop-front/component/home-page-hero-area/home-page-hero-area.component';
import { HomePageHeighlightAreaComponent } from './desktop-front/component/home-page-heighlight-area/home-page-heighlight-area.component';

import { HomePageHrmProductComponent } from './desktop-front/component/home-page-hrm-product/home-page-hrm-product.component';
import { HomePageAccountingProductComponent } from './desktop-front/component/home-page-accounting-product/home-page-accounting-product.component';
import { HomePageErpProductComponent } from './desktop-front/component/home-page-erp-product/home-page-erp-product.component';
import { HomePageTaskbingProductComponent } from './desktop-front/component/home-page-taskbing-product/home-page-taskbing-product.component';
import { HomePageWhyWeBestComponent } from './desktop-front/component/home-page-why-we-best/home-page-why-we-best.component';
import { HomePageUserFeedbackComponent } from './desktop-front/component/home-page-user-feedback/home-page-user-feedback.component';
import { HomePageProductAtAGlanceComponent } from './desktop-front/component/home-page-product-at-a-glance/home-page-product-at-a-glance.component';
import { HomePageOurPartnersComponent } from './desktop-front/component/home-page-our-partners/home-page-our-partners.component';
import { HomePageReadyToGrowComponent } from './desktop-front/component/home-page-ready-to-grow/home-page-ready-to-grow.component';
import { BrowserModule, Meta, Title, TransferState } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from './_shared/app-shared.module';
import { PagesModule } from './desktop-front/page/pages.module';
import { NotFoundModule } from './desktop-front/page/not-found/not-found.module';
import { SmoothScrollDirective } from './_shared/directives/smooth-scroll.directive';
import { PagesRoutingModule } from './desktop-front/page/pages-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    DesktopFrontComponent,
    HomePageHeroAreaComponent,
    HomePageHeighlightAreaComponent,
    HomePageHrmProductComponent,
    HomePageAccountingProductComponent,
    HomePageErpProductComponent,
    HomePageTaskbingProductComponent,
    HomePageWhyWeBestComponent,
    HomePageUserFeedbackComponent,
    HomePageProductAtAGlanceComponent,
    HomePageOurPartnersComponent,
    HomePageReadyToGrowComponent,
    RequestDemoComponent,
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule,
    AppSharedModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    PagesRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],

  exports: [],
  providers: [Title, Meta,TransferState],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
