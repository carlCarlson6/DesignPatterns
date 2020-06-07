"use strict";
exports.__esModule = true;
var EnemyDecorator = /** @class */ (function () {
    function EnemyDecorator(enemy) {
        this.enemy = enemy;
    }
    EnemyDecorator.prototype.TakeDamage = function () {
        return this.enemy.TakeDamage();
    };
    return EnemyDecorator;
}());
exports["default"] = EnemyDecorator;
