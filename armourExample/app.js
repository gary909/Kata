function doomArmour(health, armour, hit){
    let initDamage = armour - hit;
    if(initDamage < 0){
        //remember to use plus to add, otherwise minus reverses
        health = health + initDamage;
        return 'Health: ' + health + ' Armour: 0';
    }
    return 'Health: ' + health + ' Armour: ' + initDamage;
}

console.log(doomArmour(100, 20, 10)) // Return Life 100 Armour 10
console.log(doomArmour(100, 20, 30)) // Return Life 90 Armour 0
console.log(doomArmour(100, 20, 72)) // Return Life 48 Armour 0
console.log(doomArmour(100, 20, 20)) // Return Life 100 Armour 0
console.log(doomArmour(100, 100, 50)) // Return Life 100 Armour 50
console.log(doomArmour(100, 100, 128)) // Return Life 72 Armour 0