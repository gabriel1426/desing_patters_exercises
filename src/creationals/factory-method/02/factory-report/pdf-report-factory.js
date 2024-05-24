"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfReportFactory = void 0;
var report_factory_1 = require("./report-factory");
var pdf_report_generator_class_1 = require("../report-generator/pdf-report-generator.class");
var PdfReportFactory = /** @class */ (function (_super) {
    __extends(PdfReportFactory, _super);
    function PdfReportFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PdfReportFactory.prototype.createGenerateReport = function () {
        var pdfReport = new pdf_report_generator_class_1.PdfReportGeneratorClass();
        return pdfReport;
    };
    return PdfReportFactory;
}(report_factory_1.ReportFactory));
exports.PdfReportFactory = PdfReportFactory;
