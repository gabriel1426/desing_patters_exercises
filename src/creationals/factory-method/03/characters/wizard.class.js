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
exports.WizardClass = void 0;
var character_interface_1 = require("./character.interface");
var WizardClass = /** @class */ (function (_super) {
    __extends(WizardClass, _super);
    function WizardClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardClass.prototype.create = function () {
        this.name = "Wizard";
        this.level = 39;
        this.hp = 50;
        this.mp = 100;
        this.weapon = "Staff";
        this.armor = "Robe";
    };
    return WizardClass;
}(character_interface_1.ICharacterInterface));
exports.WizardClass = WizardClass;
