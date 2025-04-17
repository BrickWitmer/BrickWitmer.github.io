function calc() {
    let prin = Number(document.getElementById("princ").value);
    let rate = Number(document.getElementById("rate").value);
    let yea = Number(document.getElementById("years").value);
    let mon = Number(document.getElementById("month").value);
    let p = document.getElementById("out");
    let nt = 12 * yea
    let rn = rate/12

    let rem = prin * (1 + rn)**nt - mon * ((1+rn)**nt - 1) / rn;

    p.innerHTML = "Remaining loan balance: $" + rem.toFixed(2);
    document.getElementById('modal').showModal()
}
function reset() {
    let p = document.getElementById("out");
    p.innerHTML = ""
    document.getElementById('modal').close()
}