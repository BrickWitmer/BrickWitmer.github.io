function doMath() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let a = n1 + n2;
    let s = n1 - n2;
    let m = n1 * n2;
    let d = n1 / n2;
    let mod = n1 % n2;
    let pow = n1 ** n2;
    let sq1 = Math.sqrt(n1);
    let sq2 = Math.sqrt(n2);

    let out = "";
    out += "Add: " + a + "<br>";
    out += "Sub: " + s + "<br>";
    out += "Multi: " + m + "<br>";
    out += "Div: " + d + "<br>";
    out += "Mod: " + mod + "<br>";
    out += "Pow: " + pow + "<br>";
    out += "Sqrt of 1: " + sq1.toFixed(4) + "<br>";
    out += "Sqrt of 2: " + sq2.toFixed(4) + "<br>";
    document.getElementById("output").innerHTML = out
}