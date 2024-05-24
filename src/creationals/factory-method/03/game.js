"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.createCharacter = function (character) {
        var newCharacter = character.createCharacter();
        newCharacter.getData();
    };
    return Game;
}());
exports.Game = Game;
