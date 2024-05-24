"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBuilder = void 0;
var table_1 = require("../products/table");
var TableBuilder = /** @class */ (function () {
    function TableBuilder() {
        this.reset();
    }
    TableBuilder.prototype.reset = function () {
        this.table = new table_1.Table();
    };
    TableBuilder.prototype.setSize = function (size) {
        this.table.size = size;
    };
    TableBuilder.prototype.setColor = function (color) {
        this.table.color = color;
    };
    TableBuilder.prototype.setMaterial = function (material) {
        this.table.material = material;
    };
    TableBuilder.prototype.addLegs = function (numLegs) {
        this.table.legs = numLegs;
    };
    TableBuilder.prototype.addDrawer = function (numDrawers) {
        this.table.drawer = numDrawers;
    };
    TableBuilder.prototype.getFurniture = function () {
        var table = this.table;
        this.reset();
        return table;
    };
    return TableBuilder;
}());
exports.TableBuilder = TableBuilder;
