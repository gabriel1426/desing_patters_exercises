import {IFurnitureBuilderInterface} from "./builders/furniture-builder.interface";
import {TableBuilder} from "./builders/table-builder";
import {SofaBuilder} from "./builders/sofa-builder";

export class Director {

    createTable1(builder: IFurnitureBuilderInterface) {
        builder.setSize('Big');
        builder.setColor('red');
        builder.setMaterial('iron');
        (builder as TableBuilder).addLegs(6);
        (builder as TableBuilder).addDrawer(2);
    }

    createTable2(builder: IFurnitureBuilderInterface) {
        builder.setSize('Normal');
        builder.setColor('green');
        builder.setMaterial('wood');
        (builder as TableBuilder).addLegs(4);
    }

    createSofa1(builder: IFurnitureBuilderInterface) {
        builder.setSize('Small');
        builder.setColor('white');
        builder.setMaterial('piel');
        (builder as SofaBuilder).setCushions(2)
    }

    createSofa2(builder: IFurnitureBuilderInterface) {
        builder.setSize('Big');
        builder.setColor('brown');
        builder.setMaterial('Lino');
        (builder as SofaBuilder).setCushions(6);
        (builder as SofaBuilder).addRecliner();
    }

}
