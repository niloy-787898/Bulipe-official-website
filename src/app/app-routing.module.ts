import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { DesktopFrontComponent } from './desktop-front/desktop-front.component';
import { ApplicationStateService } from './services/application-state.service';
import { NotFoundComponent } from './desktop-front/page/not-found/not-found.component';
import { ServicesComponent } from './desktop-front/page/services/services.component';
import { LayoutComponent } from './_shared/layout/layout.component';
import { PageProductSmeComponent } from './desktop-front/page/product/page-product-sme/page-product-sme.component';
import { PageProductErpComponent } from './desktop-front/page/product/page-product-erp/page-product-erp.component';
import { PageProductHrpayrollComponent } from './desktop-front/page/product/page-product-hrpayroll/page-product-hrpayroll.component';
import { PageProductEasyaccountsComponent } from './desktop-front/page/product/page-product-easyaccounts/page-product-easyaccounts.component';
import { PageProductEinvoiceComponent } from './desktop-front/page/product/page-product-einvoice/page-product-einvoice.component';
import { PageProductCrmComponent } from './desktop-front/page/product/page-product-crm/page-product-crm.component';
import { PageProductTaskbingComponent } from './desktop-front/page/product/page-product-taskbing/page-product-taskbing.component';
import { VonomeBonikComComponent } from './desktop-front/page/company/vonome-bonik-com/vonome-bonik-com.component';
import { VonomeBonikDelevaryComponent } from './desktop-front/page/company/vonome-bonik-delevary/vonome-bonik-delevary.component';
import { VonomiBonikPlusComponent } from './desktop-front/page/company/vonomi-bonik-plus/vonomi-bonik-plus.component';
import { VonomeBonikDealsComponent } from './desktop-front/page/company/vonome-bonik-deals/vonome-bonik-deals.component';
import { VonomeBonikAppComponent } from './desktop-front/page/company/vonome-bonik-app/vonome-bonik-app.component';
import { VonomiProductsComponent } from './desktop-front/page/company/vonomi-products/vonomi-products.component';
import { DocsResourcesComponent } from './desktop-front/page/docs-resources/docs-resources.component';
import { FeatureComponent } from './desktop-front/page/helpful/feature/feature.component';
import { BlogComponent } from './desktop-front/page/helpful/blog/blog.component';
import { FaqComponent } from './desktop-front/page/helpful/faq/faq.component';
import { HelpCenterComponent } from './desktop-front/page/helpful/help-center/help-center.component';
import { AboutUsComponent } from './desktop-front/page/company-policy/about-us/about-us.component';
import { UserAgreementComponent } from './desktop-front/page/company-policy/user-agreement/user-agreement.component';
import { PrivacyPolicyComponent } from './desktop-front/page/company-policy/privacy-policy/privacy-policy.component';
import { CommunityGuidelineComponent } from './desktop-front/page/company-policy/community-guideline/community-guideline.component';
import { TermsComponent } from './desktop-front/page/terms-and-condition/terms/terms.component';
import { PrivacyComponent } from './desktop-front/page/terms-and-condition/privacy/privacy.component';
import { CookiesComponent } from './desktop-front/page/terms-and-condition/cookies/cookies.component';
import { RequestDemoComponent } from './desktop-front/page/request-demo/request-demo.component';

const desktop_routes: Routes = [
  {
    path: '',
    redirectTo: 'en',
    pathMatch: 'full',
  },
  {
    path: ':languageKey',
    component: DesktopFrontComponent,
  },
  {
    path: 'page',
    redirectTo: 'en/page',
    pathMatch: 'prefix',
  },
  {
    path: ':languageKey/page/services',
    component: ServicesComponent,
  },
  //company
  { path: ':languageKey/page/bonik-com', component: VonomeBonikComComponent },
  {
    path: ':languageKey/page/bonik-delivery',
    component: VonomeBonikDelevaryComponent,
  },
  {
    path: ':languageKey/page/bonnik-plus',
    component: VonomiBonikPlusComponent,
  },
  {
    path: ':languageKey/page/bonik-deals',
    component: VonomeBonikDealsComponent,
  },
  { path: ':languageKey/page/bonik-app', component: VonomeBonikAppComponent },
  { path: ':languageKey/page/rashed-com', component: VonomiProductsComponent },

  //docs & resources
  {
    path: ':languageKey/page/docs-resources',
    component: DocsResourcesComponent,
  },

  //helpful
  { path: ':languageKey/page/features', component: FeatureComponent },
  { path: ':languageKey/page/blog', component: BlogComponent },
  { path: ':languageKey/page/faq', component: FaqComponent },
  { path: ':languageKey/page/help-center', component: HelpCenterComponent },

  //companyt policy
  { path: ':languageKey/page/about-us', component: AboutUsComponent },
  {
    path: ':languageKey/page/user-agreement',
    component: UserAgreementComponent,
  },
  {
    path: ':languageKey/page/privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: ':languageKey/page/community-guideline',
    component: CommunityGuidelineComponent,
  },

  //Terms & Condition
  { path: ':languageKey/page/terms', component: TermsComponent },
  { path: ':languageKey/page/privacy', component: PrivacyComponent },
  { path: ':languageKey/page/cookies', component: CookiesComponent },

  //Request Demo
  { path: ':languageKey/page/request-demo', component: RequestDemoComponent },
  {
    path: 'products',
    redirectTo: 'en/products',
    pathMatch: 'prefix',
  },
  //product
  {
    path: ':languageKey/products/vonome-product-sme',
    component: PageProductSmeComponent,
  },
  {
    path: ':languageKey/products/vonome-product-erp',
    component: PageProductErpComponent,
  },
  {
    path: ':languageKey/products/vonome-product-hrpayroll',
    component: PageProductHrpayrollComponent,
  },
  {
    path: ':languageKey/products/vonome-product-easyaccounts',
    component: PageProductEasyaccountsComponent,
  },
  {
    path: ':languageKey/products/vonome-product-invoicemanager',
    component: PageProductEinvoiceComponent,
  },
  {
    path: ':languageKey/products/vonome-product-crm',
    component: PageProductCrmComponent,
  },
  {
    path: ':languageKey/products/vonome-product-task-bing',
    component: PageProductTaskbingComponent,
  },
  //Not Found
  { path: '**', component: NotFoundComponent },
  // {
  //   path: ':languageKey/page',
  //   loadChildren: () =>
  //     import('../app/desktop-front/page/pages-routing.module').then(
  //       (m) => m.PagesRoutingModule
  //     ),
  // },

  // {
  //   path: ':languageKey/products',
  //   loadChildren: () =>
  //     import('../app/desktop-front/page/pages-routing.module').then(
  //       (m) => m.PagesRoutingModule
  //     ),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(desktop_routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public constructor(
    private router: Router,
    private applicationStateService: ApplicationStateService
  ) {}
}
