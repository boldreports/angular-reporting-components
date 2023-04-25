import { BoldReportComponents } from './core';
// tslint:disable-next-line:max-line-length
import { EventEmitter, IterableDiffers, KeyValueDiffers, Component, ElementRef, ChangeDetectorRef, Input, Output } from '@angular/core';
@Component({
    selector: 'bold-reportviewer',
    template: ''})
export class BoldReportViewerComponent extends BoldReportComponents<any, any> {
	@Input('dataSources') dataSources_input: any;
	@Input('exportSettings') exportSettings_input: any;
	@Input('isResponsive') isResponsive_input: any;
	@Input('locale') locale_input: any;
	@Input('pageSettings') pageSettings_input: any;
	@Input('parameters') parameters_input: any;
	@Input('toolbarSettings') toolbarSettings_input: any;
	@Input('parameterSettings') parameterSettings_input: any;
	@Input('printMode') printMode_input: any;
	@Input('printOption') printOption_input: any;
	@Input('processingMode') processingMode_input: any;
	@Input('renderMode') renderMode_input: any;
	@Input('reportPath') reportPath_input: any;
	@Input('reportServerUrl') reportServerUrl_input: any;
	@Input('reportServiceUrl') reportServiceUrl_input: any;
	@Input('zoomFactor') zoomFactor_input: any;
	@Input('serviceAuthorizationToken') serviceAuthorizationToken_input: any;
	@Input('enableParameterBlockScroller') enableParameterBlockScroller_input: any;
	@Input('enableDatasourceBlockScroller') enableDatasourceBlockScroller_input: any;
	@Input('sizeToReportContent') sizeToReportContent_input: any;
	@Input('autoRender') autoRender_input: any;
	@Input('enableNotificationBar') enableNotificationBar_input: any;
	@Input('enableDropDownSearch') enableDropDownSearch_input: any;
	@Input('enableVirtualEvaluation') enableVirtualEvaluation_input: any;
	@Input('waitingPopupTemplate') waitingPopupTemplate_input: any;
	@Input('enableOnScrollNavigation') enableOnScrollNavigation_input: any;
	@Input('customBrandSettings') customBrandSettings_input: any;
	@Input('customBrandSettings.link') customBrandSettings_link_input: any;
	@Input('customBrandSettings.domain') customBrandSettings_domain_input: any;
	@Input('customBrandSettings.name') customBrandSettings_name_input: any;
	@Input('customBrandSettings.links') customBrandSettings_links_input: any;
	@Input('dataSources.name') dataSources_name_input: any;
	@Input('dataSources.value') dataSources_value_input: any;
	@Input('exportSettings.exportOptions') exportSettings_exportOptions_input: any;
	@Input('exportSettings.excelFormat') exportSettings_excelFormat_input: any;
	@Input('exportSettings.wordFormat') exportSettings_wordFormat_input: any;
	@Input('exportSettings.customItems') exportSettings_customItems_input: any;
	@Input('exportSettings.ImageQuality') exportSettings_ImageQuality_input: any;
	@Input('exportSettings.UsePrintSizes') exportSettings_UsePrintSizes_input: any;
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
	@Input('parameterSettings.minDateTime') parameterSettings_minDateTime_input: any;
	@Input('parameterSettings.maxDateTime') parameterSettings_maxDateTime_input: any;
	@Input('parameterSettings.hideParameterBlock') parameterSettings_hideParameterBlock_input: any;
	@Input('parameterSettings.dateTimeFormat') parameterSettings_dateTimeFormat_input: any;
	@Input('parameterSettings.timeDisplayFormat') parameterSettings_timeDisplayFormat_input: any;
	@Input('parameterSettings.timeInterval') parameterSettings_timeInterval_input: any;
	@Input('parameterSettings.accessInternalValue') parameterSettings_accessInternalValue_input: any;
	@Input('toolbarSettings.click') toolbarSettings_click_input: any;
	@Input('toolbarSettings.items') toolbarSettings_items_input: any;
	@Input('toolbarSettings.showToolbar') toolbarSettings_showToolbar_input: any;
	@Input('toolbarSettings.showTooltip') toolbarSettings_showTooltip_input: any;
	@Input('toolbarSettings.templateId') toolbarSettings_templateId_input: any;
	@Input('toolbarSettings.customItems') toolbarSettings_customItems_input: any;
	@Input('toolbarSettings.customGroups') toolbarSettings_customGroups_input: any;


	@Output('drillThrough') drillThrough_output : any = new EventEmitter();
	@Output('renderingBegin') renderingBegin_output : any = new EventEmitter();
	@Output('renderingComplete') renderingComplete_output : any = new EventEmitter();
	@Output('reportError') reportError_output : any = new EventEmitter();
	@Output('reportExport') reportExport_output : any = new EventEmitter();
	@Output('reportLoaded') reportLoaded_output : any = new EventEmitter();
	@Output('showError') showError_output : any = new EventEmitter();
	@Output('viewReportClick') viewReportClick_output : any = new EventEmitter();
	@Output('ajaxBeforeLoad') ajaxBeforeLoad_output : any = new EventEmitter();
	@Output('ajaxSuccess') ajaxSuccess_output : any = new EventEmitter();
	@Output('ajaxError') ajaxError_output : any = new EventEmitter();
	@Output('toolbarRendering') toolbarRendering_output : any = new EventEmitter();
	@Output('exportProgressChanged') exportProgressChanged_output : any = new EventEmitter();
	@Output('printProgressChanged') printProgressChanged_output : any = new EventEmitter();
	@Output('exportItemClick') exportItemClick_output : any = new EventEmitter();
	@Output('toolBarItemClick') toolBarItemClick_output : any = new EventEmitter();
	@Output('hyperlink') hyperlink_output : any = new EventEmitter();
	@Output('reportPrint') reportPrint_output : any = new EventEmitter();
	@Output('beforeParameterAdd') beforeParameterAdd_output : any = new EventEmitter();

    // tslint:disable-next-line:max-line-length
    constructor(public el: ElementRef, public cdRef: ChangeDetectorRef, private _ejIterableDiffers: IterableDiffers, private _ejkeyvaluediffers: KeyValueDiffers) {
        super('BoldReportViewer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers);
    }
}