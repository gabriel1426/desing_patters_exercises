import {Report} from "./report";
import {PdfReportFactory} from "./factory-report/pdf-report-factory";
import {HtmlReportFactory} from "./factory-report/html-report-factory";
import {CvsReportFactory} from "./factory-report/cvs-report-factory";


const report = new Report();

report.generateReport(new PdfReportFactory());
report.generateReport(new HtmlReportFactory());
report.generateReport(new CvsReportFactory());
