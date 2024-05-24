import {ReportFactory} from "./report-factory";
import {PdfReportGeneratorClass} from "../report-generator/pdf-report-generator.class";

export class PdfReportFactory extends ReportFactory{

    createGenerateReport(): PdfReportGeneratorClass {
        const pdfReport = new PdfReportGeneratorClass();
        return pdfReport;
    }
}
