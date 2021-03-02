"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: 'Assistir Dark de novo',
    description: 'Relembrar os detalhes',
    completed: false
};
console.log(todo);
// todo.completed = true;
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: 'Fechar Ghost of Tsushima',
    completed: false
};
console.log(todo3);
var todo4 = {
    title: 'Fechar Ghost of Tsushima',
    completed: false
};
