import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { CommonModule } from '@angular/common';
import { NextBtnDirective } from './directives/next-btn.directive';
import { PrevBtnDirective } from './directives/prev-btn.directive';
import { DragScrollDirective } from './directives/drag-scroll.directive';
import { VonomeDropdownDirective } from './directives/vonome-dropdown.directive';
import { VoTranslatorDirective } from './directives/vo-translator.directive';
import { SmoothScrollDirective } from './directives/smooth-scroll.directive';
import { AccordionDirective } from './directives/accordion.directive';
import { CoreServiceComponent } from './core-service/core-service.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BaseComponent } from './base/base.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    CoreServiceComponent,
    NewsletterComponent,
    VonomeDropdownDirective,
    NextBtnDirective,
    PrevBtnDirective,
    DragScrollDirective,
    VoTranslatorDirective,
    SmoothScrollDirective,
    AccordionDirective,
    BaseComponent,
    LayoutComponent
  ],
  exports: [
    MainHeaderComponent,
    MainFooterComponent,
    CoreServiceComponent,
    NewsletterComponent,
    NextBtnDirective,
    PrevBtnDirective,
    DragScrollDirective,
    VoTranslatorDirective,
    SmoothScrollDirective,
    AccordionDirective
  ],
})
export class AppSharedModule {}
