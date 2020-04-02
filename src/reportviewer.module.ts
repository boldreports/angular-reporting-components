import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoldReportViewerComponent } from './reportviewer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BoldReportViewerComponent
    ],
    exports: [
        BoldReportViewerComponent
    ]
})
export class BoldReportViewerModule {
}