import { Enemy } from "./Enemy";

export default abstract class EnemyDecorator implements Enemy {
    protected enemy : Enemy;
    
    constructor(enemy: Enemy){
        this.enemy = enemy;
    }

    TakeDamage(): number {
        return this.enemy.TakeDamage();
    }

}