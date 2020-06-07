import BaseEnemy from "./BaseEnemy";
import HelmetDecorator from "./HelmetDecorator";
import ArmourDecorator from "./ArmourDecorator";

let enemy = new BaseEnemy();
let enemyWithHelmet = new HelmetDecorator(enemy);
let enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);
let computedDamaged = enemyWithHelmetAndArmour.TakeDamage();

console.log(computedDamaged);