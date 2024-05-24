import {ReportFactory} from "./factory-report/report-factory";

export class Report {

    public generateReport(report: ReportFactory){
        const formatReport = report.createGenerateReport();
        formatReport.generateReport();
    }

}
