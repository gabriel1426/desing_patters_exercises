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
exports.ArcherClass = void 0;
var character_interface_1 = require("./character.interface");
var ArcherClass = /** @class */ (function (_super) {
    __extends(ArcherClass, _super);
    function ArcherClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArcherClass.prototype.create = function () {
        this.name = "Archer";
        this.level = 60;
        this.hp = 75;
        this.mp = 50;
        this.weapon = "Bow";
        this.armor = "Leather Armor";
    };
    return ArcherClass;
}(character_interface_1.ICharacterInterface));
exports.ArcherClass = ArcherClass;
