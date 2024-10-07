// 0. hozz létre egy txt változót és add meg a változó értékét - legalább 20 karakterből álljon

let szoveg = "Hozz_létre_egy_js_programot,_mely_végrehatja_a_követkető_feladatokat!"
console.log(`Szöveg: ${szoveg}`)
// 1. Írasd ki a konzolba az első 5 karaktert

console.log(szoveg.substring(0, 5));

// 2. Írasd ki a konzolba a 3. tól a 8-ik karakterig

console.log(szoveg.substring(2, 8)); 

// 3. Írasd ki a konzolba az 5. karaktertől a végéig

console.log(szoveg.substring(4));

// 4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan

console.log(szoveg.substring(4, 10));

// 5. Írasd ki a konzolba a txt-t nagybetűkkel

console.log(szoveg.toUpperCase());

// 6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen

let masodik = szoveg.split('').map((betu, index) => {
    return index % 2 === 1 ? betu.toUpperCase() : betu;
}).join('');
console.log(masodik);

// 7. Írasd ki a konzolba a txt-t úgy, hogy minden "e" karakter "E" legyen

let e = szoveg.replace(/e/g, 'E');
console.log(e);

// 8. Készíts tömböt a txt-ből az "e" betűk szerint elválasztva. Ítasd ki a tömböt.

let tomb = szoveg.split('e');
console.log(tomb);