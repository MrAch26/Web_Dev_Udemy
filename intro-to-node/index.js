//  jshint esversion :6

const superheroes = require('superheroes');
const supervillains = require('supervillains');


var mySuperheroName = superheroes.random();
var superVillainsName = supervillains.random();

console.log(mySuperheroName);
console.log(superVillainsName);
