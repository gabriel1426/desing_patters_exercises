"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
var Report = /** @class */ (function () {
    function Report() {
    }
    Report.prototype.generateReport = function (report) {
        var formatReport = report.createGenerateReport();
        formatReport.generateReport();
    };
    return Report;
}());
exports.Report = Report;
