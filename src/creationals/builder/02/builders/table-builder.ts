import {IFurnitureBuilderInterface} from "./furniture-builder.interface";
import {Table} from "../products/table";

export class TableBuilder implements IFurnitureBuilderInterface {

    private table: Table;

    constructor() {
        this.reset();
    }

    reset() {
        this.table = new Table();
    }

    setSize(size: string) {
        this.table.size = size;
    }

    setColor(color: string) {
        this.table.color = color;
    }

    setMaterial(material: string) {
        this.table.material = material;
    }

    public addLegs(numLegs: number): void {
        this.table.legs = numLegs;
    }

    public addDrawer(numDrawers: number): void {
       this.table.drawer = numDrawers;
    }

    getFurniture(): Table {
        const table: Table = this.table;
        this.reset();
        return table;
    }

}
