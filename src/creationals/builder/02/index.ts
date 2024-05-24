import {Director} from "./director";
import {TableBuilder} from "./builders/table-builder";
import {Table} from "./products/table";
import {SofaBuilder} from "./builders/sofa-builder";
import {Sofa} from "./products/sofa";


const director = new Director();

const tableBuilder = new TableBuilder();
director.createTable1(tableBuilder);
const table1: Table = tableBuilder.getFurniture();

director.createTable2(tableBuilder);
const table2: Table = tableBuilder.getFurniture();

const sofaBuilder = new SofaBuilder();
director.createSofa1(sofaBuilder);
const sofa1: Sofa = sofaBuilder.getFurniture();

director.createSofa2(sofaBuilder);
const sofa2: Sofa = sofaBuilder.getFurniture();


table1.getData();

table2.getData();

sofa1.getData();

sofa2.getData();
