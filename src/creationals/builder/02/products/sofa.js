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
exports.Sofa = void 0;
var furniture_1 = require("./furniture");
var Sofa = /** @class */ (function (_super) {
    __extends(Sofa, _super);
    function Sofa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sofa.prototype.getData = function () {
        console.log("Tama\u00F1o: ".concat(this.size, " - Color: ").concat(this.color, " - material del tapizado: ").concat(this.material, " - N\u00FAmero de cojines").concat(this.cushions, " - Reclinable: ").concat(this.recliner ? 'si' : 'no'));
    };
    return Sofa;
}(furniture_1.Furniture));
exports.Sofa = Sofa;
