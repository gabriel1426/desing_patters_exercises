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
exports.WarriorFactoryClass = void 0;
var character_factory_class_1 = require("./character-factory.class");
var warrior_class_1 = require("../characters/warrior.class");
var WarriorFactoryClass = /** @class */ (function (_super) {
    __extends(WarriorFactoryClass, _super);
    function WarriorFactoryClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarriorFactoryClass.prototype.createCharacter = function () {
        var warrior = new warrior_class_1.WarriorClass();
        warrior.create();
        return warrior;
    };
    return WarriorFactoryClass;
}(character_factory_class_1.CharacterFactoryClass));
exports.WarriorFactoryClass = WarriorFactoryClass;
