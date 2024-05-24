import {IReportGeneratorInterface} from "./report-generator.interface";

export class CvsReportGeneratorClass implements IReportGeneratorInterface {

    generateReport() {
        console.log("Este es el reporte en formato CVS");
    }

}
