import {ReportFactory} from "./report-factory";
import {CvsReportGeneratorClass} from "../report-generator/cvs-report-generator.class";

export class CvsReportFactory extends ReportFactory{

    createGenerateReport(): CvsReportGeneratorClass {
        const cvsReport = new CvsReportGeneratorClass();
        return cvsReport;
    }

}
