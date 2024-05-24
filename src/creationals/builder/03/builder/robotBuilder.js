"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotBuilder = void 0;
var robot_1 = require("../product/robot");
var RobotBuilder = /** @class */ (function () {
    function RobotBuilder() {
        this.robot = new robot_1.Robot();
        this.reset();
    }
    RobotBuilder.prototype.reset = function () {
        this.robot = new robot_1.Robot();
        return this;
    };
    RobotBuilder.prototype.withCabeza = function (cabeza) {
        this.robot.cabeza = cabeza;
        return this;
    };
    RobotBuilder.prototype.withBrazos = function (brazos) {
        this.robot.brazos = brazos;
        return this;
    };
    RobotBuilder.prototype.withPiernas = function (piernas) {
        this.robot.piernas = piernas;
        return this;
    };
    RobotBuilder.prototype.withTorso = function (torso) {
        this.robot.torso = torso;
        return this;
    };
    RobotBuilder.prototype.build = function () {
        var robot = this.robot;
        this.reset();
        return robot;
    };
    return RobotBuilder;
}());
exports.RobotBuilder = RobotBuilder;
