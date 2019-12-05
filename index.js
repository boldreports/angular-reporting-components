"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var reportviewer_component_1 = require("./src/reportviewer.component");
var reportdesigner_component_1 = require("./src/reportdesigner.component");
__export(require("./src/reportviewer.component"));
__export(require("./src/reportdesigner.component"));
__export(require("./src/core"));
var BOLD_COMPONENTS = [reportviewer_component_1.BOLD_REPORTVIEWER_COMPONENTS, reportdesigner_component_1.BOLD_REPORTDESIGNER_COMPONENTS];
var BoldReportsAngularModule = (function () {
    function BoldReportsAngularModule() {
    }
    BoldReportsAngularModule.forRoot = function () {
        return {
            ngModule: BoldReportsAngularModule
        };
    };
    BoldReportsAngularModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        BOLD_COMPONENTS
                    ],
                    exports: [
                        BOLD_COMPONENTS
                    ]
                },] },
    ];
    /** @nocollapse */
    BoldReportsAngularModule.ctorParameters = function () { return []; };
    return BoldReportsAngularModule;
}());
exports.BoldReportsAngularModule = BoldReportsAngularModule;
//# sourceMappingURL=index.js.map