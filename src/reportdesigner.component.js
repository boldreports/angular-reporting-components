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
require("@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min");
var core_1 = require("./core");
// tslint:disable-next-line:max-line-length
var core_2 = require("@angular/core");
var BoldReportDesignerComponent = (function (_super) {
    __extends(BoldReportDesignerComponent, _super);
    // tslint:disable-next-line:max-line-length
    function BoldReportDesignerComponent(el, cdRef, _ejIterableDiffers, _ejkeyvaluediffers) {
        var _this = _super.call(this, 'BoldReportDesigner', el, cdRef, [], _ejIterableDiffers, _ejkeyvaluediffers) || this;
        _this.el = el;
        _this.cdRef = cdRef;
        _this._ejIterableDiffers = _ejIterableDiffers;
        _this._ejkeyvaluediffers = _ejkeyvaluediffers;
        _this.ajaxBeforeLoad_output = new core_2.EventEmitter();
        _this.ajaxError_output = new core_2.EventEmitter();
        _this.ajaxSuccess_output = new core_2.EventEmitter();
        _this.create_output = new core_2.EventEmitter();
        _this.destroy_output = new core_2.EventEmitter();
        _this.newDataClick_output = new core_2.EventEmitter();
        _this.openReportClick_output = new core_2.EventEmitter();
        _this.previewReport_output = new core_2.EventEmitter();
        _this.reportModified_output = new core_2.EventEmitter();
        _this.reportOpened_output = new core_2.EventEmitter();
        _this.reportSaved_output = new core_2.EventEmitter();
        _this.saveReportClick_output = new core_2.EventEmitter();
        _this.toolbarClick_output = new core_2.EventEmitter();
        _this.toolbarRendering_output = new core_2.EventEmitter();
        return _this;
    }
    BoldReportDesignerComponent.decorators = [
        { type: core_2.Component, args: [{
                    selector: 'bold-reportdesigner',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    BoldReportDesignerComponent.ctorParameters = function () { return [
        { type: core_2.ElementRef, },
        { type: core_2.ChangeDetectorRef, },
        { type: core_2.IterableDiffers, },
        { type: core_2.KeyValueDiffers, },
    ]; };
    BoldReportDesignerComponent.propDecorators = {
        "configurePaneSettings_input": [{ type: core_2.Input, args: ['configurePaneSettings',] },],
        "locale_input": [{ type: core_2.Input, args: ['locale',] },],
        "permissionSettings_input": [{ type: core_2.Input, args: ['permissionSettings',] },],
        "previewOptions_input": [{ type: core_2.Input, args: ['previewOptions',] },],
        "reportDataExtensions_input": [{ type: core_2.Input, args: ['reportDataExtensions',] },],
        "reportItemExtensions_input": [{ type: core_2.Input, args: ['reportItemExtensions',] },],
        "reportPath_input": [{ type: core_2.Input, args: ['reportPath',] },],
        "reportType_input": [{ type: core_2.Input, args: ['reportType',] },],
        "reportServerUrl_input": [{ type: core_2.Input, args: ['reportServerUrl',] },],
        "serviceAuthorizationToken_input": [{ type: core_2.Input, args: ['serviceAuthorizationToken',] },],
        "serviceUrl_input": [{ type: core_2.Input, args: ['serviceUrl',] },],
        "tenantName_input": [{ type: core_2.Input, args: ['tenantName',] },],
        "toolbarSettings_input": [{ type: core_2.Input, args: ['toolbarSettings',] },],
        "configurePaneSettings_items_input": [{ type: core_2.Input, args: ['configurePaneSettings.items',] },],
        "configurePaneSettings_showPane_input": [{ type: core_2.Input, args: ['configurePaneSettings.showPane',] },],
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
        "permissionSettings_dataSet_input": [{ type: core_2.Input, args: ['permissionSettings.dataSet',] },],
        "permissionSettings_dataSource_input": [{ type: core_2.Input, args: ['permissionSettings.dataSource',] },],
        "previewOptions_dataSources_input": [{ type: core_2.Input, args: ['previewOptions.dataSources',] },],
        "previewOptions_enableParameterBlockScroller_input": [{ type: core_2.Input, args: ['previewOptions.enableParameterBlockScroller',] },],
        "previewOptions_enableDatasourceBlockScroller_input": [{ type: core_2.Input, args: ['previewOptions.enableDatasourceBlockScroller',] },],
        "previewOptions_enableDropDownSearch_input": [{ type: core_2.Input, args: ['previewOptions.enableDropDownSearch',] },],
        "previewOptions_exportSettings_input": [{ type: core_2.Input, args: ['previewOptions.exportSettings',] },],
        "previewOptions_pageSettings_input": [{ type: core_2.Input, args: ['previewOptions.pageSettings',] },],
        "previewOptions_parameters_input": [{ type: core_2.Input, args: ['previewOptions.parameters',] },],
        "previewOptions_parameterSettings_input": [{ type: core_2.Input, args: ['previewOptions.parameterSettings',] },],
        "previewOptions_printMode_input": [{ type: core_2.Input, args: ['previewOptions.printMode',] },],
        "previewOptions_printOption_input": [{ type: core_2.Input, args: ['previewOptions.printOption',] },],
        "previewOptions_toolbarSettings_input": [{ type: core_2.Input, args: ['previewOptions.toolbarSettings',] },],
        "previewOptions_zoomFactor_input": [{ type: core_2.Input, args: ['previewOptions.zoomFactor',] },],
        "reportDataExtensions_name_input": [{ type: core_2.Input, args: ['reportDataExtensions.name',] },],
        "reportDataExtensions_className_input": [{ type: core_2.Input, args: ['reportDataExtensions.className',] },],
        "reportDataExtensions_imageClass_input": [{ type: core_2.Input, args: ['reportDataExtensions.imageClass',] },],
        "reportDataExtensions_displayName_input": [{ type: core_2.Input, args: ['reportDataExtensions.displayName',] },],
        "reportItemExtensions_name_input": [{ type: core_2.Input, args: ['reportItemExtensions.name',] },],
        "reportItemExtensions_className_input": [{ type: core_2.Input, args: ['reportItemExtensions.className',] },],
        "reportItemExtensions_imageClass_input": [{ type: core_2.Input, args: ['reportItemExtensions.imageClass',] },],
        "reportItemExtensions_displayName_input": [{ type: core_2.Input, args: ['reportItemExtensions.displayName',] },],
        "reportItemExtensions_category_input": [{ type: core_2.Input, args: ['reportItemExtensions.category',] },],
        "reportItemExtensions_toolTip_input": [{ type: core_2.Input, args: ['reportItemExtensions.toolTip',] },],
        "toolbarSettings_items_input": [{ type: core_2.Input, args: ['toolbarSettings.items',] },],
        "toolbarSettings_showToolbar_input": [{ type: core_2.Input, args: ['toolbarSettings.showToolbar',] },],
        "toolbarSettings_templateId_input": [{ type: core_2.Input, args: ['toolbarSettings.templateId',] },],
        "ajaxBeforeLoad_output": [{ type: core_2.Output, args: ['ajaxBeforeLoad',] },],
        "ajaxError_output": [{ type: core_2.Output, args: ['ajaxError',] },],
        "ajaxSuccess_output": [{ type: core_2.Output, args: ['ajaxSuccess',] },],
        "create_output": [{ type: core_2.Output, args: ['create',] },],
        "destroy_output": [{ type: core_2.Output, args: ['destroy',] },],
        "newDataClick_output": [{ type: core_2.Output, args: ['newDataClick',] },],
        "openReportClick_output": [{ type: core_2.Output, args: ['openReportClick',] },],
        "previewReport_output": [{ type: core_2.Output, args: ['previewReport',] },],
        "reportModified_output": [{ type: core_2.Output, args: ['reportModified',] },],
        "reportOpened_output": [{ type: core_2.Output, args: ['reportOpened',] },],
        "reportSaved_output": [{ type: core_2.Output, args: ['reportSaved',] },],
        "saveReportClick_output": [{ type: core_2.Output, args: ['saveReportClick',] },],
        "toolbarClick_output": [{ type: core_2.Output, args: ['toolbarClick',] },],
        "toolbarRendering_output": [{ type: core_2.Output, args: ['toolbarRendering',] },],
    };
    return BoldReportDesignerComponent;
}(core_1.BoldReportComponents));
exports.BoldReportDesignerComponent = BoldReportDesignerComponent;
exports.BOLD_REPORTDESIGNER_COMPONENTS = [BoldReportDesignerComponent
];
//# sourceMappingURL=reportdesigner.component.js.map