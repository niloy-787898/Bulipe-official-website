import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { PageProductSmeComponent } from "./product/page-product-sme/page-product-sme.component";
import { PageProductErpComponent } from "./product/page-product-erp/page-product-erp.component";
import { PageProductHrpayrollComponent } from "./product/page-product-hrpayroll/page-product-hrpayroll.component";
import { PageProductEasyaccountsComponent } from "./product/page-product-easyaccounts/page-product-easyaccounts.component";
import { PageProductEinvoiceComponent } from "./product/page-product-einvoice/page-product-einvoice.component";
import { PageProductCrmComponent } from "./product/page-product-crm/page-product-crm.component";
import { PageProductTaskbingComponent } from "./product/page-product-taskbing/page-product-taskbing.component";
import { ServicesComponent } from "./services/services.component";
import { VonomeBonikComComponent } from "./company/vonome-bonik-com/vonome-bonik-com.component";
import { VonomeBonikDelevaryComponent } from "./company/vonome-bonik-delevary/vonome-bonik-delevary.component";
import { VonomiBonikPlusComponent } from "./company/vonomi-bonik-plus/vonomi-bonik-plus.component";
import { VonomeBonikDealsComponent } from "./company/vonome-bonik-deals/vonome-bonik-deals.component";
import { VonomeBonikAppComponent } from "./company/vonome-bonik-app/vonome-bonik-app.component";
import { VonomiProductsComponent } from "./company/vonomi-products/vonomi-products.component";
import { DocsResourcesComponent } from "./docs-resources/docs-resources.component";
import { FeatureComponent } from "./helpful/feature/feature.component";
import { BlogComponent } from "./helpful/blog/blog.component";
import { FaqComponent } from "./helpful/faq/faq.component";
import { HelpCenterComponent } from "./helpful/help-center/help-center.component";
import { AboutUsComponent } from "./company-policy/about-us/about-us.component";
import { UserAgreementComponent } from "./company-policy/user-agreement/user-agreement.component";
import { PrivacyPolicyComponent } from "./company-policy/privacy-policy/privacy-policy.component";
import { CommunityGuidelineComponent } from "./company-policy/community-guideline/community-guideline.component";
import { TermsComponent } from "./terms-and-condition/terms/terms.component";
import { PrivacyComponent } from "./terms-and-condition/privacy/privacy.component";
import { CookiesComponent } from "./terms-and-condition/cookies/cookies.component";
import { RequestDemoComponent } from "./request-demo/request-demo.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: '', component:PagesComponent,
    children:[
      //product
      {path:'vonome-product-sme', component:PageProductSmeComponent},
      {path:'vonome-product-erp', component:PageProductErpComponent},
      {path:'vonome-product-hrpayroll', component:PageProductHrpayrollComponent},
      {path:'vonome-product-easyaccounts', component:PageProductEasyaccountsComponent},
      {path:'vonome-product-invoicemanager', component:PageProductEinvoiceComponent},
      {path:'vonome-product-crm', component:PageProductCrmComponent},
      {path:'vonome-product-task-bing', component:PageProductTaskbingComponent},

      //services
      {path:'services', component:ServicesComponent},
      
      //company
      {path:'bonik-com', component:VonomeBonikComComponent},
      {path:'bonik-delivery', component:VonomeBonikDelevaryComponent},
      {path:'bonnik-plus', component:VonomiBonikPlusComponent},
      {path:'bonik-deals', component:VonomeBonikDealsComponent},
      {path:'bonik-app', component:VonomeBonikAppComponent},
      {path:'rashed-com', component:VonomiProductsComponent},


      //docs & resources
      {path:'docs-resources', component:DocsResourcesComponent},

      //helpful
      {path:'features', component:FeatureComponent},
      {path:'blog', component:BlogComponent},
      {path:'faq', component:FaqComponent},
      {path:'help-center', component:HelpCenterComponent},

      //companyt policy
      {path:'about-us', component:AboutUsComponent},
      {path:'user-agreement', component:UserAgreementComponent},
      {path:'privacy-policy', component:PrivacyPolicyComponent},
      {path:'community-guideline', component:CommunityGuidelineComponent},

      //Terms & Condition
      {path:'terms', component:TermsComponent},
      {path:'privacy', component:PrivacyComponent},
      {path:'cookies', component:CookiesComponent},

      //Request Demo
      {path:'request-demo', component:RequestDemoComponent},
    ]
  },
];

@NgModule({
 
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule], 
})
export class PagesRoutingModule { }
