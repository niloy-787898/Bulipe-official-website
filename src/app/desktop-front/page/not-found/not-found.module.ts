import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from "../../../_shared/app-shared.module";
@NgModule({
    declarations: [NotFoundComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: NotFoundComponent }]),
        AppSharedModule
    ]
})
export class NotFoundModule { }
