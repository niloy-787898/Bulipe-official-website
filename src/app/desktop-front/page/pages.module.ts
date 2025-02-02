import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../../_shared/app-shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { PageProductSmeComponent } from './product/page-product-sme/page-product-sme.component';
import { PageProductCrmComponent } from './product/page-product-crm/page-product-crm.component';
import { PageProductHrpayrollComponent } from './product/page-product-hrpayroll/page-product-hrpayroll.component';
import { PageProductEasyaccountsComponent } from './product/page-product-easyaccounts/page-product-easyaccounts.component';
import { PageProductEinvoiceComponent } from './product/page-product-einvoice/page-product-einvoice.component';
import { PageProductErpComponent } from './product/page-product-erp/page-product-erp.component';
import { PageProductTaskbingComponent } from './product/page-product-taskbing/page-product-taskbing.component';
import { ServicesComponent } from './services/services.component';
import { DocsResourcesComponent } from './docs-resources/docs-resources.component';
import { AboutUsComponent } from './company-policy/about-us/about-us.component';
import { BlogComponent } from './helpful/blog/blog.component';
import { FeatureComponent } from './helpful/feature/feature.component';
import { FaqComponent } from './helpful/faq/faq.component';
import { HelpCenterComponent } from './helpful/help-center/help-center.component';
import { MainHeaderComponent } from 'src/app/_shared/main-header/main-header.component';
import { CommunityGuidelineComponent } from './company-policy/community-guideline/community-guideline.component';
import { UserAgreementComponent } from './company-policy/user-agreement/user-agreement.component';
import { PrivacyPolicyComponent } from './company-policy/privacy-policy/privacy-policy.component';
import { VonomeBonikAppComponent } from './company/vonome-bonik-app/vonome-bonik-app.component';
import { VonomeBonikComComponent } from './company/vonome-bonik-com/vonome-bonik-com.component';
import { VonomeBonikDealsComponent } from './company/vonome-bonik-deals/vonome-bonik-deals.component';
import { VonomeBonikDelevaryComponent } from './company/vonome-bonik-delevary/vonome-bonik-delevary.component';
import { VonomiBonikPlusComponent } from './company/vonomi-bonik-plus/vonomi-bonik-plus.component';
import { VonomiProductsComponent } from './company/vonomi-products/vonomi-products.component';
import { TermsComponent } from './terms-and-condition/terms/terms.component';
import { CookiesComponent } from './terms-and-condition/cookies/cookies.component';


@NgModule({
  declarations: [
    PagesComponent,
    PageProductSmeComponent,
    PageProductCrmComponent,
    PageProductHrpayrollComponent,
    PageProductEasyaccountsComponent,
    PageProductEinvoiceComponent,
    PageProductErpComponent,
    PageProductTaskbingComponent,
    ServicesComponent,
    DocsResourcesComponent,
    AboutUsComponent,
    BlogComponent,
    FeatureComponent,
    FaqComponent,
    HelpCenterComponent,
    CommunityGuidelineComponent,
    UserAgreementComponent,
    PrivacyPolicyComponent,
    VonomeBonikAppComponent,
    VonomeBonikComComponent,
    VonomeBonikDealsComponent,
    VonomeBonikDelevaryComponent,
    VonomiBonikPlusComponent,
    VonomiProductsComponent,
    TermsComponent,
    CookiesComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    PagesRoutingModule, 
    CommonModule,
    FormsModule,
  ],
  exports: [
    PagesComponent
  ]

})
export class PagesModule {}
