# Anotações sobre TypeScript

## **Instalação**

------

## **Compilar**
- Para compilar um único arquivo nós usamos o comando: 
```bash
tsc [arquivo.ts]
```

- Para compilar um único arquivo e ficar esperando por novas mudanças podemos usar o comando:
```bash
tsc [arquivo.ts] --watch
```

### **Criando e configurando o TSconfig**

Se quisermos compilar vários arquivos ao mesmo tempo ou também definir algumas regras, como por exemplo a pasta em que seram salvos os arquivos compilados, precisaremos gerar o arquivo `tsconfig.json`.

Para gera-lo usamos o comando:
```bash
tsc --init
```

Nesse arquivo optei por ativar a propriedade `outDir` para a pasta `./dist`, assim toda vez que compilar o código ele será salvo nessa pasta.

Depois disso feito podemos executar o comando:
```bash
tsc
```

Assim o arquivo será salvo na pasta correspondente.

------

## **Types**

### **Boolean**

O tipo `boolean` aceita somente valores `true` ou `false`, por exemplo:
```typescript
let isOpen: boolean
isOpen = true
```
Note que aqui **não** podemos utilizar _0_ ou _1_ nem _string vazia_ e _string preenchida_ para valores de `true` ou `false`.

### **String**

O tipo `string` recebe valores dentro de aspas simples (`''`), aspas duplas (`""`) e crase (` `` `)

Os três jeitos aceitam textos, porém com a crase podemos passar valores `javascript` também, por exemplo:
```typescript
let message: string
message = `A variável isOpen está com o valor ${isOpen}`
```

### **Number**

O tipo `number` aceita valores `int`, `float`, `hex`, `binary`, entre outros. Exemplos:
```typescript
let total: number
//int
total = 20

//float
total = 20.3

//hexadecimal
total = 0xff00
```

### **Array**

O tipo `array` funciona um pouco diferente dos demais, além de declarar que o _type_ será `array`, é preciso declarar o que terá dentro dele.

Dito isso, também podemos declarar de duas maneiras o _type_ `array`. Exemplos:
```typescript
// type[]
let items: string[]
items = ['foo', 'bar']

//Array<type>
let list: Array<number>
list = [1, 2, 3]
```

Note que na segunda opção precisamos escrever a palavra `Array` iniciando com letra maiúscula.

### **Tuple**

Esse tipo `tuple` (tupla) nada mais é que um _array_ que já sabemos o número de elementos e o tipo deles.

```typescript
let title: [number, string]
title = [1, 'foo']
```

Note que nesse tipo não podemos declarar outro valor, como por exemplo:

```typescript
let title: [number, string]
title = [1, 'foo', 3]
```

Esse terceiro valor não poderá ser assinalado, pois está definido que ele só terá duas variáveis na tupla.

### **Enum**

O tipo `enum` é um enumerator que serve para criarmos um conjunto **chave/valor**.

> Para ilustrar um pouco: pense que em um CMS existe um campo para selecionar cores, porém a pessoa que vai fazer isso é leiga e não sabe hexadecimal, para evitar de passar um valor que a pessoa possa ficar confusa e podemos passar o valor como no exemplo abaixo.

```typescript
enum Colors {
  white = '#fff',
  black = '#000'
}
```

### **Any**

O tipo `any` é o terror de quem trabalha com typescript, pois ele literalmente quer dizer **qualquer coisa**. Criando uma variável com esse tipo podemos fazer o que quisermos. Exemplo:

```typescript
let coisa: any
//boolean
coisa = true
//string
coisa = 'foo'
//array
coisa = [1, 2, 3]
```

Não é recomendável utilizar esse tipo em nenhum dos casos, no arquivo `tsconfig.json` podemos até pedir pra que ele seja barrado com a opção `noImplicitAny`. 

### **Void**

O tipo `void` é utilizado para quando não temos retorno, ou não queremos retornar nada. Exemplo:

```typescript
function logger(): void {
  console.log('foo')
}
```

No caso do exemplo utilizei um `console.log()`, nessa situação não precisaria nem mesmo tipar como `void`, pois o próprio `typescript` sabe que o retorno foi vazio.

### **Null/Undefined**

Esse tipo é utilizado quando não sabemos o valor ou ele ainda não foi definido. Na prática `null` e `undefined` não tem diferença nenhuma.

```typescript
type Bla = string | undefined
```

### **Never**

Esse tipo é usado para o `typescript` nunca reclamar, é utilizado em situações em que queremos jogar algum erro na tela. Exemplo:

```typescript
function error(): never {
  throw new Error('error')
}
```

### **Object**

O tipo `object` é qualquer coisa que não os tipos primitivos falados acima. Exemplo:

```typescript
let cart: object

cart = {
  key: 'foo'
}
```

Caso atribuamos valores de outros tipos ele dará erro, pois ele não é de nenhum dos outros tipos primitivos. Exemplo:

```typescript
let cart: object
//string
cart = 'foo'
//number
cart = 3
//array
cart = [1, 2, 3]
```

------

## **Type Inference** (inferência de tipo)

Nos exemplos acima nós criamos a variável e atribuimos os tipos pra elas e depois passavamos os valores.

Porém existem situações que não precisamos criar a variável para depois atribuirmos o valor, podemos simplesmente passar o valor da variável logo de cara. Exemplo:

```typescript
let text = 'mensagem definida'
```

Nesse caso o `typescript` já entende que a variável `text` é do tipo `string`, pois atribuimos uma `string` pra ele.

Se tentarmos mudar o valor da variável depois disso ele dará erro, pois o tipo já foi inferido acima. Exemplo:

```typescript
let text = 'mensagem definida'
text = true
```

------

## **Type Aliases**

Com o **type alias** nós conseguimos facilitar o código, para que não precisemos ficar escrevendo a mesma coisa várias vezes. Exemplo:

```typescript
type Uid = number | string

function logDetails(uid: Uid, item: string) {
  console.log(`O produto ${item} tem o código ${uid}.`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`O usuário ${user} tem o código de usuário: ${uid}.`)
}


logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo(456, 'João')
logInfo('456', 'João')
```

Nesse exemplo isso facilita caso tenhamos muitas funções que vão utilizar esse `uid`, assim não precisariamos ficar escrevendo `uid: number | string` todas as vezes.