import {IReportGeneratorInterface} from "../report-generator/report-generator.interface";

export abstract class ReportFactory {
    public abstract createGenerateReport(): IReportGeneratorInterface
}
