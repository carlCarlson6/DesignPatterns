import EnemyDecorator from "./EnemyDecorator";

export default class HelmetDecorator extends EnemyDecorator {

    TakeDamage(): number {
        return this.enemy.TakeDamage()/2;
    }

}