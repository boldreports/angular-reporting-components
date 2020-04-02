import { BoldReportComponents } from './core';
// tslint:disable-next-line:max-line-length
import { EventEmitter, IterableDiffers, KeyValueDiffers, Component, ElementRef, ChangeDetectorRef, Input, Output } from '@angular/core';

@Component({
    selector: 'bold-reportdesigner',
    template: ''})
export class BoldReportDesignerComponent extends BoldReportComponents<any, any> {
	@Input('configurePaneSettings') configurePaneSettings_input: any;
	@Input('locale') locale_input: any;
	@Input('permissionSettings') permissionSettings_input: any;
	@Input('previewOptions') previewOptions_input: any;
	@Input('reportDataExtensions') reportDataExtensions_input: any;
	@Input('reportItemExtensions') reportItemExtensions_input: any;
	@Input('reportPath') reportPath_input: any;
	@Input('reportType') reportType_input: any;
	@Input('reportServerUrl') reportServerUrl_input: any;
	@Input('serviceAuthorizationToken') serviceAuthorizationToken_input: any;
	@Input('serviceUrl') serviceUrl_input: any;
	@Input('tenantName') tenantName_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('waitingPopupTemplate') waitingPopupTemplate_input: any;
	@Input('configurePaneSettings.items') configurePaneSettings_items_input: any;
	@Input('configurePaneSettings.showPane') configurePaneSettings_showPane_input: any;
	@Input('dataSources.name') dataSources_name_input: any;
	@Input('dataSources.value') dataSources_value_input: any;
	@Input('exportSettings.exportOptions') exportSettings_exportOptions_input: any;
	@Input('exportSettings.excelFormat') exportSettings_excelFormat_input: any;
	@Input('exportSettings.wordFormat') exportSettings_wordFormat_input: any;
	@Input('exportSettings.customItems') exportSettings_customItems_input: any;
	@Input('pageSettings.orientation') pageSettings_orientation_input: any;
	@Input('pageSettings.paperSize') pageSettings_paperSize_input: any;
	@Input('pageSettings.height') pageSettings_height_input: any;
	@Input('pageSettings.width') pageSettings_width_input: any;
	@Input('pageSettings.margins') pageSettings_margins_input: any;
	@Input('parameters.labels') parameters_labels_input: any;
	@Input('parameters.name') parameters_name_input: any;
	@Input('parameters.nullable') parameters_nullable_input: any;
	@Input('parameters.prompt') parameters_prompt_input: any;
	@Input('parameters.values') parameters_values_input: any;
	@Input('parameterSettings.delimiterChar') parameterSettings_delimiterChar_input: any;
	@Input('parameterSettings.popupHeight') parameterSettings_popupHeight_input: any;
	@Input('parameterSettings.popupWidth') parameterSettings_popupWidth_input: any;
	@Input('parameterSettings.itemWidth') parameterSettings_itemWidth_input: any;
	@Input('parameterSettings.labelWidth') parameterSettings_labelWidth_input: any;
	@Input('permissionSettings.dataSet') permissionSettings_dataSet_input: any;
	@Input('permissionSettings.dataSource') permissionSettings_dataSource_input: any;
	@Input('previewOptions.dataSources') previewOptions_dataSources_input: any;
	@Input('previewOptions.enableParameterBlockScroller') previewOptions_enableParameterBlockScroller_input: any;
	@Input('previewOptions.enableDatasourceBlockScroller') previewOptions_enableDatasourceBlockScroller_input: any;
	@Input('previewOptions.enableDropDownSearch') previewOptions_enableDropDownSearch_input: any;
	@Input('previewOptions.exportSettings') previewOptions_exportSettings_input: any;
	@Input('previewOptions.pageSettings') previewOptions_pageSettings_input: any;
	@Input('previewOptions.parameters') previewOptions_parameters_input: any;
	@Input('previewOptions.parameterSettings') previewOptions_parameterSettings_input: any;
	@Input('previewOptions.printMode') previewOptions_printMode_input: any;
	@Input('previewOptions.printOption') previewOptions_printOption_input: any;
	@Input('previewOptions.toolbarSettings') previewOptions_toolbarSettings_input: any;
	@Input('previewOptions.zoomFactor') previewOptions_zoomFactor_input: any;
	@Input('reportDataExtensions.name') reportDataExtensions_name_input: any;
	@Input('reportDataExtensions.className') reportDataExtensions_className_input: any;
	@Input('reportDataExtensions.imageClass') reportDataExtensions_imageClass_input: any;
	@Input('reportDataExtensions.displayName') reportDataExtensions_displayName_input: any;
	@Input('reportItemExtensions.name') reportItemExtensions_name_input: any;
	@Input('reportItemExtensions.className') reportItemExtensions_className_input: any;
	@Input('reportItemExtensions.imageClass') reportItemExtensions_imageClass_input: any;
	@Input('reportItemExtensions.displayName') reportItemExtensions_displayName_input: any;
	@Input('reportItemExtensions.category') reportItemExtensions_category_input: any;
	@Input('reportItemExtensions.toolTip') reportItemExtensions_toolTip_input: any;
	@Input('toolbarSettings.items') toolbarSettings_items_input: any;
	@Input('toolbarSettings.showToolbar') toolbarSettings_showToolbar_input: any;
	@Input('toolbarSettings.templateId') toolbarSettings_templateId_input: any;


	@Output('ajaxBeforeLoad') ajaxBeforeLoad_output : any = new EventEmitter();
	@Output('ajaxError') ajaxError_output : any = new EventEmitter();
	@Output('ajaxSuccess') ajaxSuccess_output : any = new EventEmitter();
	@Output('create') create_output : any = new EventEmitter();
	@Output('destroy') destroy_output : any = new EventEmitter();
	@Output('newDataClick') newDataClick_output : any = new EventEmitter();
	@Output('openReportClick') openReportClick_output : any = new EventEmitter();
	@Output('previewReport') previewReport_output : any = new EventEmitter();
	@Output('reportModified') reportModified_output : any = new EventEmitter();
	@Output('reportOpened') reportOpened_output : any = new EventEmitter();
	@Output('reportSaved') reportSaved_output : any = new EventEmitter();
	@Output('saveReportClick') saveReportClick_output : any = new EventEmitter();
	@Output('toolbarClick') toolbarClick_output : any = new EventEmitter();
	@Output('toolbarRendering') toolbarRendering_output : any = new EventEmitter();

    // tslint:disable-next-line:max-line-length
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('BoldReportDesigner', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }
}