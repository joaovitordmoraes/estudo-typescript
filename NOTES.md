# Anotações sobre TypeScript

## **Instalação**

Primeiramente entraremos no site oficial do [TypeScript](https://www.typescriptlang.org/#installation), nele terá a maneira correta e mais atual da instalação.

> **OBS.:** É necessário instalar o [Node.js](https://nodejs.org/en/) para que a instalação do TypeScript ocorra corretamente.

No caso rodamos para instalar o comando:
```bash
npm install typescript
```

No caso também é legal instalar o [Nodemon](https://nodemon.io) para podermos rodar o nosso código e conferi-lo no terminal.

No caso rodamos para instalar o comando:
```bash
npm install -g nodemon
```

Para rodar o código e conferirmos no terminal utilizamos o comando:

```bash
nodemos [arquivo.js]
```

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

Também podemos compilar e ficar esperando por novas mudanças podemos usar o comando:

```bash
tsc --watch
```

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

## **Type Alias**

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

### **Estendendo Type Aliases**

Imagine que temos um jogo online, e nesse jogo temos as _infos_ da conta, temos também o _info_ do char para nosso personagem.

Nesse pensamento em primeiro momento nós iremos criar um _type_ para essa conta e para o char. Exemplo:

```typescript
type AccountInfo = {
  id: number;
  name: string;
  email?: string;
}

type CharInfo = {
  nickname: string;
  level: number;
}

const account: AccountInfo = {
  id: 1,
  name: 'João',
  email: 'teste@teste.com'
}

const char: CharInfo = {
  nickname: 'Link',
  level: 100
}
```

> **OBS.:** Perceba que no item _email_ nós temos uma `?`, isso significa que essa info é opcional, se passarmos o mouse em cima dela veremos que ela nos retorna os tipos `string | undefined`, essa é uma outra maneira de fazermos essa situação opcional.

E se quisessemos centralizar essas _infos_ tanto ta conta como do char em um mesmo local?

Para unirmos esses dois tipos é bem simples, basta que nós adicionemos a um novo _type_ player e passemos os types dos anteriores unidos por uma intercessão (intersection). Exemplo:

```typescript
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 1,
  nickname: 'Link',
  level: 100,
  name: 'João',
  email: 'teste@teste.com'
}
```

> **OBS.:** Repare que nesse caso de `intersection` tanto faz a ordem com que passamos os dados, ele funciona da mesma maneira. O que não podemos fazer é tirar alguma info obrigatória como por exemplo o `id`, só podemos tirar o `email` pois o definimos como opcional.

------

## **Classes**

Para criarmos uma classe nós precisamos nós precisamos criar as infos e criar um método, no caso um `constructor`. 

O `constructor` recebe as props que o objeto vai receber. Recebendo os valores conseguimos assinalar os valores como abaixo:

```typescript
class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

Se quisermos já criar um objeto dessa classe podemos da seguinte maneira:

```typescript
class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const foo = new UserAccount('Link', 100)
console.log(foo)
```

Podemos também criar outros métodos dentro desse objeto dessa maneira:

```typescript
class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails() {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

const foo = new UserAccount('Link', 100)
console.log(foo)
foo.logDetails()
```

### **Classes Extend**

Podemos criar uma `class` com todas as infos dela e também ter as infos da `class anterior`, podemos fazer isso da seguinte maneira:

```typescript
class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails() {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }
}

const foo = new UserAccount('Link', 100)
console.log(foo)
foo.logDetails()

const matt = new CharAccount('Matt', 45, 'Link', 100)
console.log(matt)
matt.logDetails()
```

> **OBS.:** Note que nesse caso que para pegarmos as props da `class` que estamos "estendendo" utilizamos a `super()`, que pega as props da `class` "superior" ou "acima".

Assim conseguimos em uma `class` herdar outra `class` e utilizar os métodos da anterior. Isso é uma das grandes vantagens da POO (programação orientada a objetos).

### **Modifiers**

Digamos que tenhamos alguma propriedade que queremos que não possa ser modificada depois da sua criação. Exemplo:

```typescript
const matt = new CharAccount('Matt', 45, 'Link', 100)
matt.nickname = 'Zelda';
console.log(matt)
```

Nesse exemplo utilizado nós alteramos o `nickname` após sua criação. 

Para evitarmos esse tipo de situação existem algumas formas:

1. **Private**: A mais "engessada" seria utilizando a palavra `private` antes da prop que queremos bloquear. Exemplo:

```typescript
class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }
}
```

Assim teriamos um erro quando tentarmos alterar essa prop, pois neste caso nenhum lugar externo conseguiria chama-la.

O mesmo vale se quisermos visualizar essa prop fora da função, como por exemplo com um `console.log`, assim:

```typescript
class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }
}

const matt = new CharAccount('Matt', 45, 'Link', 100)
console.log(matt.nickname)
```

Com o `private` esse `console.log` dará erro e não permitirá que o valor seja mostrado.

2. **Read only**: Essa opção permite que a `prop` seja lida fora da função, porém não poderá ser alterada. Exemplo:

```typescript
class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }
}

const matt = new CharAccount('Matt', 45, 'Link', 100)
console.log(matt)
console.log(matt.level)
```

Se tentarmos alterar essa `prop` _level_ receberemos a mensagem de que ela não pode ser alterada, pois esta `prop` está definida como read-only.

3. **Protected**: É quando conseguimos chamar dentro da `class` ou da `class que está estendendo ela`, porém não conseguimos chama-la por fora.

```typescript
class UserAccount {
  name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails() {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }

  logCharDetails() {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
  }
}

```

Nese caso, como no `private`, não conseguiremos chamar a `prop` _age_ para ser mostrada fora da class.

> **OBS.:** `Private` e `Protected` são bem parecidos, porém no caso de `private` a `prop` só poderá ser chamada dentro da sua class mesmo, não podendo ser utilizada na class estendida.

Outra `prop` que não se encaixa nesses casos de bloquear alterações é a implícita por default: `public`.

Nela podemos fazer todo tipo de ação com as `props`, como editar e ser chamada fora da função livremente.

### **Accessors**

Basicamente nós temos dois métodos os `get` e `set` onde podemos pegar valores dentro da nossa `class`.

1. **Get**: Com ele podemos pegar valores dentro da nossa `class`:

```typescript
class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level
  }

  logCharDetails() {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
  }
}

const matt = new CharAccount('Matt', 45, 'Link', 100)
console.log(matt.getLevel)
```

Repare que passamos o `getLevel` como se fosse uma `prop` e não uma `função`. Ela é uma `prop` que vai te retornar um valor, porém diferente de chamar a `prop` simplesmente ela pode fazer alguma regra de validação para nos retornar um valor. Exemplo:

```typescript
class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log('--Poderíamos ter uma validação aqui--')
    return this.level
  }

  logCharDetails() {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
  }
}

const matt = new CharAccount('Matt', 45, 'Link', 100)
console.log(matt.getLevel)
```

2. **Set**: Com ele podemos "setar" valores dentro da nossa `class`, ou seja, adicionar ou definir novos valores. Exemplo:

```typescript
class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }

  logCharDetails() {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
  }
}

const matt = new CharAccount('Matt', 45, 'Link', 100)
matt.setLevel = 499
console.log(matt.getLevel)
```

### **Abstract Class**

É uma classe abstrata onde não se é possível criar objetos a partir dela, porém é possível extendê-la. Exemplo:

```typescript
abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails() {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }

  logCharDetails() {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
  }
}

//aqui não podemos mais criar instância de classe abstrata
const foo = new UserAccount('Link', 100)

const matt = new CharAccount('Matt', 45, 'Link', 100)
```

A classe abstrata é interessante para quando criamos uma `class` que serve somente de modelo para outras classes e não queremos permitir que nada seja criado a partir dela.

