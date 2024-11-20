"use strict";
var objektum = {
    oldalhossz: document.querySelector('#length'),
    alfaSzog: document.querySelector('#angle'),
    szamitasGomb: document.querySelector('#szamitasGomb'),
    h1: document.querySelector('#h1')
};
objektum.szamitasGomb.addEventListener('click', () => {
    var oldalhossz = Number(objektum.oldalhossz.value);
    var alfaSzog = Number(objektum.alfaSzog.value);
    var alfaSzogRadianja = alfaSzog * (Math.PI / 180);
    var alfaSzogSzinusza = Math.sin(alfaSzogRadianja);
    var rombuszbaIrhatoSugar = (1 / 2) * (oldalhossz * alfaSzogSzinusza);
    objektum.h1.innerHTML = '<p>' + "Kis pontatlansággal (lebegőpontos számok természetéből fakadóan) a végeredmény, a rombuszba írható kör sugara: " + '</p>' + '<h1>' + rombuszbaIrhatoSugar + '</h1>' + '<p>' + 'Mivel azt nem tetszett írni, hogy OOP alapelven vagy esetleg nélküle kell megoldani a feladatot megoldottam OOPvel is illetve outputnak inputot használtam (bár szerintem szebb a h1 tag kimenetnek)' + '</p>';
    console.log(rombuszbaIrhatoSugar);
});