/**
 * A paraméterben megadott tömb alapján számold ki, 
 * hogy a tömben található szavaknak, mekkora az átlagos 
 * hosszuk. Az átlag a függvény visszatérési értéke legyen.
 */
function task01(arr){
    return arr.map(x => x.length).reduce((a,b) => a+b)/arr.length
}

/** 
 * A paraméterben kapott tömbben található számokat alakítsd át 
 * úgy, hogy minden számra vedd az abszolút értékét és oszd el hárommal,
 * ezután az eredményt kerekítsd. Az így kapott tömb legyen a függvény visszatérési értéke. 
 */
function task02(arr){
    return arr.map(x => Math.round(Math.abs(x)/3))
}
/**
 * Keresd meg azt az utolsó elemet a paraméterként kapott tömbben,
 * amelyik hárommal és öttel is osztható.
 */
function task03(arr){
    return arr.findLast(x => x%3===0 && x%5===0)
}

/**
 * A paraméterben megadott tömbből add vissza annak az elemnek az indexét,
 * amelyik pontosan 5 karakter hosszú. Ha több ilyen is van akkor az első előfordulást.
 */
function task04(arr){
//    return arr.indexOf(arr.find(x => x.length === 5))
    return arr.findIndex(x => x.length === 5)
}
/**
 * A paraméterben megadott tömbből válogasd ki a pozitív páros számokat.
 */
function task05(arr){
    return arr.filter(x => x>0 && x%2===0)
}
