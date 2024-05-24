import {ReportFactory} from "./report-factory";
import {HtmlReportGeneratorClass} from "../report-generator/html-report-generator.class";

export class HtmlReportFactory extends ReportFactory{

    createGenerateReport(): HtmlReportGeneratorClass {
        const htmlReport = new HtmlReportGeneratorClass();
        return htmlReport;
    }

}
