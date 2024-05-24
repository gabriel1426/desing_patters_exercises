"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcherFactoryClass = void 0;
var character_factory_class_1 = require("./character-factory.class");
var archer_class_1 = require("../characters/archer.class");
var ArcherFactoryClass = /** @class */ (function (_super) {
    __extends(ArcherFactoryClass, _super);
    function ArcherFactoryClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArcherFactoryClass.prototype.createCharacter = function () {
        var archer = new archer_class_1.ArcherClass();
        archer.create();
        return archer;
    };
    return ArcherFactoryClass;
}(character_factory_class_1.CharacterFactoryClass));
exports.ArcherFactoryClass = ArcherFactoryClass;
