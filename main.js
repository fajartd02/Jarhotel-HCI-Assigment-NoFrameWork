/* Nama : Fajar Muhammad Hamka
   NIM : 2440113616
   Kelas : LA01
*/

function welcome(){
    alert('Selamat Datang di Jarhotel ^^');
}

var gambar = document.getElementById('gambar');
var nomor = 0;
var left = document.getElementById('left-arrow');
var right = document.getElementById('right-arrow');
var text = document.getElementById('Text');
// text.innerHTML = "Hallo";

function typeRooms(){
    if(nomor === 0){
        text.innerHTML = "Luxurious Double Bed Room";
    }
    else if(nomor === 1){
        text.innerHTML = "Luxurious Family Bed Room";
    }
    else{
        text.innerHTML = "Luxurious Single Bed Room";
    }
}

left.onclick = function(){
    if(nomor === 0){
        nomor = 2;
    }else{
        nomor = nomor - 1;
    }
    gambar.src = "img/" + nomor +".jpg";
    typeRooms();
}

right.onclick = function(){
    if(nomor === 2){
        nomor = 0;
    }else{
        nomor = nomor + 1;
    }
    gambar.src = "img/" + nomor +".jpg";
    typeRooms();
}

function moreText1() {
var less1 = document.getElementById("less1");
var more1 = document.getElementById("more1");
var btn1 = document.getElementById("btn1");

if (less1.style.display === "none") {
    less1.style.display = "inline";
    btn1.innerHTML = "Read more";
    more1.style.display = "none";
} else {
    less1.style.display = "none";
    btn1.innerHTML = "Less";
    more1.style.display = "inline";
}
}

function moreText2(){
    var less2 = document.getElementById("less2");
    var more2 = document.getElementById("more2");
    var btn2 = document.getElementById("btn2");

    if(less2.style.display === "none"){
        less2.style.display = "inline";
        more2.style.display = "none";
        btn2.innerHTML = "Read more";
    } else{
        less2.style.display = "none";
        more2.style.display = "inline";
        btn2.innerHTML = "Less";
    }
}

function moreText3(){
    var less3 = document.getElementById("less3");
    var more3 = document.getElementById("more3");
    var btn3 = document.getElementById("btn3");

    if(less3.style.display === "none"){
        less3.style.display = "inline";
        more3.style.display = "none";
        btn3.innerHTML = "Read more";
    } else{
        less3.style.display = "none";
        more3.style.display = "inline";
        btn3.innerHTML = "Less";
    }
}