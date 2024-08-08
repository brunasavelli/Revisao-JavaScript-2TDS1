let quantidadePalmas = 20;
let palmas = "";

for (let i = 1; i <= quantidadePalmas; i++) {
    palmas += "👏🏻";
    if (i % 5 === 0){
        palmas += "🎉";
    }
}
console.log(palmas);

