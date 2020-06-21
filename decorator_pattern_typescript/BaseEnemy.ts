import { Enemy } from "./Enemy";

export default class BaseEnemy implements Enemy {
    TakeDamage(): number {
        return 10
    }

}