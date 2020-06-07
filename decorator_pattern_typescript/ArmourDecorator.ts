import EnemyDecorator from "./EnemyDecorator";

export default class ArmourDecorator extends EnemyDecorator {

    TakeDamage(): number {
        return this.enemy.TakeDamage()/1.5;
    }

}