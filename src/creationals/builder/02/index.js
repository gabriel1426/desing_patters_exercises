"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var director_1 = require("./director");
var table_builder_1 = require("./builders/table-builder");
var sofa_builder_1 = require("./builders/sofa-builder");
var director = new director_1.Director();
var tableBuilder = new table_builder_1.TableBuilder();
director.createTable1(tableBuilder);
var table1 = tableBuilder.getFurniture();
director.createTable2(tableBuilder);
var table2 = tableBuilder.getFurniture();
var sofaBuilder = new sofa_builder_1.SofaBuilder();
director.createSofa1(sofaBuilder);
var sofa1 = sofaBuilder.getFurniture();
director.createSofa2(sofaBuilder);
var sofa2 = sofaBuilder.getFurniture();
table1.getData();
table2.getData();
sofa1.getData();
sofa2.getData();
