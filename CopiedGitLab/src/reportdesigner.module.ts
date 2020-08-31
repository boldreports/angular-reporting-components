import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoldReportDesignerComponent } from './reportdesigner.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BoldReportDesignerComponent
    ],
    exports: [
        BoldReportDesignerComponent
    ]
})
export class BoldReportDesignerModule {
}