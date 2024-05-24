import {IReportGeneratorInterface} from "./report-generator.interface";

export class PdfReportGeneratorClass implements IReportGeneratorInterface {

    generateReport() {
        console.log("Este es el reporte en formato PDF");
    }

}
