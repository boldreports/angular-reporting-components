"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min");
var core_1 = require("./core");
// tslint:disable-next-line:max-line-length
var core_2 = require("@angular/core");
var BoldReportViewerComponent = (function (_super) {
    __extends(BoldReportViewerComponent, _super);
    // tslint:disable-next-line:max-line-length
    function BoldReportViewerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'BoldReportViewer', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.drillThrough_output = new core_2.EventEmitter();
        _this.renderingBegin_output = new core_2.EventEmitter();
        _this.renderingComplete_output = new core_2.EventEmitter();
        _this.reportError_output = new core_2.EventEmitter();
        _this.reportExport_output = new core_2.EventEmitter();
        _this.reportLoaded_output = new core_2.EventEmitter();
        _this.showError_output = new core_2.EventEmitter();
        _this.viewReportClick_output = new core_2.EventEmitter();
        _this.ajaxBeforeLoad_output = new core_2.EventEmitter();
        _this.ajaxSuccess_output = new core_2.EventEmitter();
        _this.ajaxError_output = new core_2.EventEmitter();
        _this.toolbarRendering_output = new core_2.EventEmitter();
        _this.exportProgressChanged_output = new core_2.EventEmitter();
        _this.printProgressChanged_output = new core_2.EventEmitter();
        _this.exportItemClick_output = new core_2.EventEmitter();
        _this.toolBarItemClick_output = new core_2.EventEmitter();
        _this.hyperlink_output = new core_2.EventEmitter();
        _this.reportPrint_output = new core_2.EventEmitter();
        return _this;
    }
    BoldReportViewerComponent.decorators = [
        { type: core_2.Component, args: [{
                    selector: 'bold-reportviewer',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    BoldReportViewerComponent.ctorParameters = function () { return [
        { type: core_2.ElementRef, },
        { type: core_2.ChangeDetectorRef, },
        { type: core_2.IterableDiffers, },
        { type: core_2.KeyValueDiffers, },
    ]; };
    BoldReportViewerComponent.propDecorators = {
        "dataSources_input": [{ type: core_2.Input, args: ['dataSources',] },],
        "enablePageCache_input": [{ type: core_2.Input, args: ['enablePageCache',] },],
        "exportSettings_input": [{ type: core_2.Input, args: ['exportSettings',] },],
        "isResponsive_input": [{ type: core_2.Input, args: ['isResponsive',] },],
        "locale_input": [{ type: core_2.Input, args: ['locale',] },],
        "pageSettings_input": [{ type: core_2.Input, args: ['pageSettings',] },],
        "parameters_input": [{ type: core_2.Input, args: ['parameters',] },],
        "toolbarSettings_input": [{ type: core_2.Input, args: ['toolbarSettings',] },],
        "parameterSettings_input": [{ type: core_2.Input, args: ['parameterSettings',] },],
        "printMode_input": [{ type: core_2.Input, args: ['printMode',] },],
        "printOption_input": [{ type: core_2.Input, args: ['printOption',] },],
        "processingMode_input": [{ type: core_2.Input, args: ['processingMode',] },],
        "renderMode_input": [{ type: core_2.Input, args: ['renderMode',] },],
        "reportPath_input": [{ type: core_2.Input, args: ['reportPath',] },],
        "reportServerUrl_input": [{ type: core_2.Input, args: ['reportServerUrl',] },],
        "reportServiceUrl_input": [{ type: core_2.Input, args: ['reportServiceUrl',] },],
        "zoomFactor_input": [{ type: core_2.Input, args: ['zoomFactor',] },],
        "serviceAuthorizationToken_input": [{ type: core_2.Input, args: ['serviceAuthorizationToken',] },],
        "enableParameterBlockScroller_input": [{ type: core_2.Input, args: ['enableParameterBlockScroller',] },],
        "enableDatasourceBlockScroller_input": [{ type: core_2.Input, args: ['enableDatasourceBlockScroller',] },],
        "sizeToReportContent_input": [{ type: core_2.Input, args: ['sizeToReportContent',] },],
        "autoRender_input": [{ type: core_2.Input, args: ['autoRender',] },],
        "enableNotificationBar_input": [{ type: core_2.Input, args: ['enableNotificationBar',] },],
        "enableDropDownSearch_input": [{ type: core_2.Input, args: ['enableDropDownSearch',] },],
        "enablePageVirtualization_input": [{ type: core_2.Input, args: ['enablePageVirtualization',] },],
        "waitingPopupTemplate_input": [{ type: core_2.Input, args: ['waitingPopupTemplate',] },],
        "dataSources_name_input": [{ type: core_2.Input, args: ['dataSources.name',] },],
        "dataSources_value_input": [{ type: core_2.Input, args: ['dataSources.value',] },],
        "exportSettings_exportOptions_input": [{ type: core_2.Input, args: ['exportSettings.exportOptions',] },],
        "exportSettings_excelFormat_input": [{ type: core_2.Input, args: ['exportSettings.excelFormat',] },],
        "exportSettings_wordFormat_input": [{ type: core_2.Input, args: ['exportSettings.wordFormat',] },],
        "exportSettings_customItems_input": [{ type: core_2.Input, args: ['exportSettings.customItems',] },],
        "pageSettings_orientation_input": [{ type: core_2.Input, args: ['pageSettings.orientation',] },],
        "pageSettings_paperSize_input": [{ type: core_2.Input, args: ['pageSettings.paperSize',] },],
        "pageSettings_height_input": [{ type: core_2.Input, args: ['pageSettings.height',] },],
        "pageSettings_width_input": [{ type: core_2.Input, args: ['pageSettings.width',] },],
        "pageSettings_margins_input": [{ type: core_2.Input, args: ['pageSettings.margins',] },],
        "parameters_labels_input": [{ type: core_2.Input, args: ['parameters.labels',] },],
        "parameters_name_input": [{ type: core_2.Input, args: ['parameters.name',] },],
        "parameters_nullable_input": [{ type: core_2.Input, args: ['parameters.nullable',] },],
        "parameters_prompt_input": [{ type: core_2.Input, args: ['parameters.prompt',] },],
        "parameters_values_input": [{ type: core_2.Input, args: ['parameters.values',] },],
        "parameterSettings_delimiterChar_input": [{ type: core_2.Input, args: ['parameterSettings.delimiterChar',] },],
        "parameterSettings_popupHeight_input": [{ type: core_2.Input, args: ['parameterSettings.popupHeight',] },],
        "parameterSettings_popupWidth_input": [{ type: core_2.Input, args: ['parameterSettings.popupWidth',] },],
        "parameterSettings_itemWidth_input": [{ type: core_2.Input, args: ['parameterSettings.itemWidth',] },],
        "parameterSettings_labelWidth_input": [{ type: core_2.Input, args: ['parameterSettings.labelWidth',] },],
        "parameterSettings_hideParameterBlock_input": [{ type: core_2.Input, args: ['parameterSettings.hideParameterBlock',] },],
        "toolbarSettings_click_input": [{ type: core_2.Input, args: ['toolbarSettings.click',] },],
        "toolbarSettings_items_input": [{ type: core_2.Input, args: ['toolbarSettings.items',] },],
        "toolbarSettings_showToolbar_input": [{ type: core_2.Input, args: ['toolbarSettings.showToolbar',] },],
        "toolbarSettings_showTooltip_input": [{ type: core_2.Input, args: ['toolbarSettings.showTooltip',] },],
        "toolbarSettings_templateId_input": [{ type: core_2.Input, args: ['toolbarSettings.templateId',] },],
        "toolbarSettings_customItems_input": [{ type: core_2.Input, args: ['toolbarSettings.customItems',] },],
        "toolbarSettings_customGroups_input": [{ type: core_2.Input, args: ['toolbarSettings.customGroups',] },],
        "drillThrough_output": [{ type: core_2.Output, args: ['drillThrough',] },],
        "renderingBegin_output": [{ type: core_2.Output, args: ['renderingBegin',] },],
        "renderingComplete_output": [{ type: core_2.Output, args: ['renderingComplete',] },],
        "reportError_output": [{ type: core_2.Output, args: ['reportError',] },],
        "reportExport_output": [{ type: core_2.Output, args: ['reportExport',] },],
        "reportLoaded_output": [{ type: core_2.Output, args: ['reportLoaded',] },],
        "showError_output": [{ type: core_2.Output, args: ['showError',] },],
        "viewReportClick_output": [{ type: core_2.Output, args: ['viewReportClick',] },],
        "ajaxBeforeLoad_output": [{ type: core_2.Output, args: ['ajaxBeforeLoad',] },],
        "ajaxSuccess_output": [{ type: core_2.Output, args: ['ajaxSuccess',] },],
        "ajaxError_output": [{ type: core_2.Output, args: ['ajaxError',] },],
        "toolbarRendering_output": [{ type: core_2.Output, args: ['toolbarRendering',] },],
        "exportProgressChanged_output": [{ type: core_2.Output, args: ['exportProgressChanged',] },],
        "printProgressChanged_output": [{ type: core_2.Output, args: ['printProgressChanged',] },],
        "exportItemClick_output": [{ type: core_2.Output, args: ['exportItemClick',] },],
        "toolBarItemClick_output": [{ type: core_2.Output, args: ['toolBarItemClick',] },],
        "hyperlink_output": [{ type: core_2.Output, args: ['hyperlink',] },],
        "reportPrint_output": [{ type: core_2.Output, args: ['reportPrint',] },],
    };
    return BoldReportViewerComponent;
}(core_1.BoldReportComponents));
exports.BoldReportViewerComponent = BoldReportViewerComponent;
exports.BOLD_REPORTVIEWER_COMPONENTS = [BoldReportViewerComponent
];
//# sourceMappingURL=reportviewer.component.js.map