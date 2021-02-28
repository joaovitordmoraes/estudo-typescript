"use strict";
// boolean (true/false)
var isOpen;
isOpen = true;
// string ('teste', "teste", `teste`)
var message;
message = "Teste " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff08;
// array (type[])
var items;
items = ['foo', 'bar'];
var list;
list = [1, 2, 3];
// tuple
var title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any
var coisa;
// coisa = 'string'
// coisa = [1, 2, 3]
coisa = true;
// void (vazio)
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error('error');
}
// object
var cart;
cart = {
    key: 'foo'
};
