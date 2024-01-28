// 5.js
let rad = 9; // Swappa detta värde för att testa olika scenarier

if (rad === 0) {
    console.log("värdet är noll");
} else if (rad === 1) {
    console.log("Endast en rad");
} else if (rad >= 2 && rad <= 10) {
    let i = 2;
    while (i <= rad) {
        console.log("detta är rad " + i);
        i++;
    }
} else {
    console.log("För mycket rader eller ogiltigt värde");
}
