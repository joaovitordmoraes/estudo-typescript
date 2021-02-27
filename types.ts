// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('teste', "teste", `teste`)
let message: string
message = `Teste ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff08

// array (type[])
let items: string[]
items = ['foo', 'bar']

let list: Array<number>
list = [1, 2, 3]

// tuple
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any
let coisa: any
// coisa = 'string'
// coisa = [1, 2, 3]
coisa = true

// void (vazio)
function logger(): void {
  console.log('foo')
}

// null/undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error('error')
}

// object
let cart: object

cart = {
  key: 'foo'
}