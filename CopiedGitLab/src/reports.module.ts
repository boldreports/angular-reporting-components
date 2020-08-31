import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoldReportDesignerModule } from './reportdesigner.module';
import { BoldReportViewerModule } from './reportviewer.module';

@NgModule({
  imports: [
    CommonModule,
    BoldReportViewerModule,
    BoldReportDesignerModule
  ],
  declarations: [
  ],
  exports: [
    BoldReportViewerModule,
    BoldReportDesignerModule
  ]
})
export class BoldReportsModule {
}