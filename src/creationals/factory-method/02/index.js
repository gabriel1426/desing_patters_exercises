"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var report_1 = require("./report");
var pdf_report_factory_1 = require("./factory-report/pdf-report-factory");
var html_report_factory_1 = require("./factory-report/html-report-factory");
var cvs_report_factory_1 = require("./factory-report/cvs-report-factory");
var report = new report_1.Report();
report.generateReport(new pdf_report_factory_1.PdfReportFactory());
report.generateReport(new html_report_factory_1.HtmlReportFactory());
report.generateReport(new cvs_report_factory_1.CvsReportFactory());
