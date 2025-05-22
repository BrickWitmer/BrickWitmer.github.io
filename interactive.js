let r = document.querySelector(':root')
function changetheme(){
    let c1 = document.getElementById("color1").value;
    let c2 = document.getElementById("color2").value;
    r.style.setProperty('--color1',c1);
    r.style.setProperty('--color2',c2);
    localStorage.setItem('--color1',c1);
    localStorage.setItem('--color2',c2);
}
function reset(){
    let c1 = '#222222';
    let c2 = '#555555';
    r.style.setProperty('--color1',c1);
    r.style.setProperty('--color2',c2);
    localStorage.setItem('--color1',c1);
    localStorage.setItem('--color2',c2);
}

window.onload = () => {
    c1 = localStorage.getItem('--color1');
    c2 = localStorage.getItem('--color2');
    r.style.setProperty('--color1',c1);
    r.style.setProperty('--color2',c2);
}