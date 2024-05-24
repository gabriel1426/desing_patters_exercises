import {IReportGeneratorInterface} from "./report-generator.interface";

export class HtmlReportGeneratorClass implements IReportGeneratorInterface{

    generateReport() {
        console.log("Este es el reporte en formato HTML");
    }
}
