"use strict";
// Sem type alias
function logDetails(uid, item) {
    console.log("O produto " + item + " tem o c\u00F3digo " + uid + ".");
}
logDetails(123, 'sapato');
logDetails('123', 'sapato');
function logInfo(uid, user) {
    console.log("O usu\u00E1rio " + user + " tem o c\u00F3digo de usu\u00E1rio: " + uid + ".");
}
logInfo(456, 'João');
logInfo('456', 'João');
