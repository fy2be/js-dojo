const string = 'PLANETS 63 05G3W5 4 - 0 0 0 0 078FK 6 - 6 0 0 0 0ISO 6 - 2 3 0 0 0Q385N 4 - 6 2 0 0 0TYSS3 4 - 6 0 0 0 11DWK 4 - 3 1 0 0 18WC 5 - 3 0 0 0 1E6J 5 - 3 0 0 0 20HC 5 - 2 2 0 0 236U16 3 - 6 3 0 0 2A590T 5 - 5 3 0 0 2NPL2 4 - 6 0 0 0 2T922U 3 crabby 15 0 1 0 32Z8W4 5 - 2 0 0 0 3FG1W 3 crabby 11 0 1 1 3WKA 6 - 6 3 0 0 51MA7 3 - 6 3 0 0 55VBCK 4 - 2 2 0 0 56W1K 4 - 3 1 0 0 57U158 4 - 6 2 0 0 58F0 5 - 5 2 0 0 5HFY 6 crabby 31 0 1 0 6188R2 4 - 4 0 0 0 6CLD2I 3 - 6 1 0 0 6KKL 5 - 2 2 0 0 6YS4EX 3 - 2 0 0 0 7943P 3 - 3 2 0 0 795001 3 - 2 0 0 0 7OOG1 4 - 6 0 0 0 7USE 4 - 3 1 0 0 7W7B 4 crabby 29 0 1 1 80106 4 crabby 28 2 1 2 838LA 3 crabby 16 0 1 0 94FUUJ 3 crabby 11 0 1 1 9U94 4 - 6 2 0 0 9WHT90 4 - 2 2 0 0 A524 4 m0rfik 0 47 2 0 ACBS 4 - 3 3 0 0 AV10 6 - 2 3 0 0 B614 4 - 2 2 0 0 BCU5 6 - 6 0 0 0 D274S 5 - 5 3 0 0 D2BPLX 5 - 2 2 0 0 EM90U3 5 - 2 2 0 0 G10A 5 - 2 0 0 0 H6YDB 4 m0rfik 19 0 1 3 J3W9C7 4 m0rfik 43 2 1 2 L512G1 6 - 6 0 0 0 LST81S 5 - 5 2 0 0 LWJ7 4 - 2 2 0 0 NII2 6 - 6 3 0 0 OFDI68 4 - 4 0 0 0 QQBVU 5 - 5 3 0 0 R3GMI4 4 - 3 3 0 0 T9G379 5 - 2 2 0 0 TM41 4 - 3 3 0 0 V185F4 3 - 6 3 0 0 W6ST5 5 - 3 0 0 0 XVS0A 5 - 2 2 0 0 Y80GF 5 - 2 0 0 0 YFPQ15 6 crabby 19 0 1 5 ZDDQ3 3 - 6 1 0 0 ZVY1 5 - 5 2 0 0';
const string2 = '05G3W5 4 - 0 0 0 0 078FK 6 bonek 6 0 0 0';

const regex = /[A-Z0-9]{4,} \d+ [a-zA-Z0-9-]+ \d+ \d+ \d+ \d+/g;

const planets = [];
do {
    result = regex.exec(string);
    if (result) {
        const [name, efficiency, owner, ships, tanks, production, turn] = result[0].split(' ');
        planets.push({
            name,
            efficiency: parseInt(efficiency),
            owner,
            ships: parseInt(ships),
            tanks: parseInt(tanks),
            production: parseInt(production),
            turn: parseInt(turn)
        });
    }
} while (result);

console.log('Sum: ' + planets.length);

console.log('Planet 1: ');
console.dir(planets[0]);


