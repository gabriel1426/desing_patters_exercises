"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.createTable1 = function (builder) {
        builder.setSize('Big');
        builder.setColor('red');
        builder.setMaterial('iron');
        builder.addLegs(6);
        builder.addDrawer(2);
    };
    Director.prototype.createTable2 = function (builder) {
        builder.setSize('Normal');
        builder.setColor('green');
        builder.setMaterial('wood');
        builder.addLegs(4);
    };
    Director.prototype.createSofa1 = function (builder) {
        builder.setSize('Small');
        builder.setColor('white');
        builder.setMaterial('piel');
        builder.setCushions(2);
    };
    Director.prototype.createSofa2 = function (builder) {
        builder.setSize('Big');
        builder.setColor('brown');
        builder.setMaterial('Lino');
        builder.setCushions(6);
        builder.addRecliner();
    };
    return Director;
}());
exports.Director = Director;
