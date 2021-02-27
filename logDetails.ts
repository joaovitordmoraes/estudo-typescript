// Sem type alias
function logDetails(uid: number | string, item: string) {
  console.log(`O produto ${item} tem o código ${uid}.`)
}

logDetails(123, 'sapato')
logDetails('123', 'sapato')

//Com type alias
type Uid = number | string

function logInfo(uid: Uid, user: string) {
  console.log(`O usuário ${user} tem o código de usuário: ${uid}.`)
}

logInfo(456, 'João')
logInfo('456', 'João')