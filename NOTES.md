# Anotações sobre TypeScript

## **Instalação**
<details><summary>Veja mais</summary>

Primeiramente entraremos no site oficial do [TypeScript](https://www.typescriptlang.org/#installation), nele terá a maneira correta e mais atual da instalação.

> **OBS.:** É necessário instalar o [Node.js](https://nodejs.org/en/) para que a instalação do TypeScript ocorra corretamente.

Rodamos o comando abaixo para instalar:
```bash
npm install typescript
```

No caso também é legal instalar o [Nodemon](https://nodemon.io) para podermos rodar o nosso código e conferi-lo no terminal.

Rodamos o comando abaixo para instalar:
```bash
npm install -g nodemon
```

Para rodar o código e conferirmos no terminal utilizamos o comando:

```bash
nodemon [arquivo.js]
```
</details>

------

## **Compilar**

<details><summary>Veja mais</summary>

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
</details>

------

## **Types**

<details><summary>Veja mais</summary>

<details><summary>Boolean</summary>

O tipo `boolean` aceita somente valores `true` ou `false`, por exemplo:
```typescript
let isOpen: boolean
isOpen = true
```
Note que aqui **não** podemos utilizar _0_ ou _1_ nem _string vazia_ e _string preenchida_ para valores de `true` ou `false`.
</details>


<details><summary>String</summary>

O tipo `string` recebe valores dentro de aspas simples (`''`), aspas duplas (`""`) e crase (` `` `)

Os três jeitos aceitam textos, porém com a crase podemos passar valores `javascript` também, por exemplo:
```typescript
let message: string
message = `A variável isOpen está com o valor ${isOpen}`
```
</details>

<details><summary>Number</summary>

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
</details>

<details><summary>Array</summary>

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

</details>

<details><summary>Tuple</summary>

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

</details>

<details><summary>Enum</summary>

O tipo `enum` é um enumerator que serve para criarmos um conjunto **chave/valor**.

> Para ilustrar um pouco: pense que em um CMS existe um campo para selecionar cores, porém a pessoa que vai fazer isso é leiga e não sabe hexadecimal, para evitar de passar um valor que a pessoa possa ficar confusa e podemos passar o valor como no exemplo abaixo.

```typescript
enum Colors {
  white = '#fff',
  black = '#000'
}
```
</details>

<details><summary>Any</summary>

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

</details>

<details><summary>Void</summary>

O tipo `void` é utilizado para quando não temos retorno, ou não queremos retornar nada. Exemplo:

```typescript
function logger(): void {
  console.log('foo')
}
```

No caso do exemplo utilizei um `console.log()`, nessa situação não precisaria nem mesmo tipar como `void`, pois o próprio `typescript` sabe que o retorno foi vazio.

</details>

<details><summary>Null/Undefined</summary>

Esse tipo é utilizado quando não sabemos o valor ou ele ainda não foi definido. Na prática `null` e `undefined` não tem diferença nenhuma.

```typescript
type Bla = string | undefined
```

</details>

<details><summary>Never</summary>

Esse tipo é usado para o `typescript` nunca reclamar, é utilizado em situações em que queremos jogar algum erro na tela. Exemplo:

```typescript
function error(): never {
  throw new Error('error')
}
```

</details>

<details><summary>Object</summary>

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

</details>

</details>

------

## **Type Inference** (inferência de tipo)

<details><summary>Veja mais</summary>

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

</details>

------

## **Type Alias**

<details><summary>Veja mais</summary>

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

<details><summary>Estendendo Type Aliases</summary>

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

</details>

</details>

------

## **Classes**

<details><summary>Veja mais</summary>

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

<details><summary>Classes Extend</summary>

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

</details>

<details><summary>Modifiers</summary>

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

</details>

<details><summary>Accessors</summary>

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
</details>

<details><summary>Abstract Class</summary>

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

</details>

</details>

------

## **Interfaces**

<details><summary>Veja mais</summary>

As `interfaces` nada mais são do que uma estrutura de dados para descrever a estrutura de um objeto.

```typescript
interface Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilars: (title: string) => void
}

const tlou: Game = {
  title: 'The Last of us',
  description: 'The best game in the world',
  genre: 'Action',
  platform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
  }
}

tlou.getSimilars(tlou.title)
```

Assim como nas classes, aqui podemos utilizar dos `modifiers` para configurar algo como opcional, privado, etc.

```typescript
interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars: (title: string) => void
}
...
```

Também como no `type alias`, aqui nós podemos estender as interfaces para outras, porém de uma maneira um pouco diferente. Exemplo:
```typescript
interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void
}

...

tlou.getSimilars(tlou.title)

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: 'The Last of us - Left Behind',
  description: 'You play as Ellie before the original game',
  genre: 'Action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ['3 hours story', 'new characters']
}
```

Repare que nesse caso modificamos um pouco o funcionamento da prop `getSimilars` da `interface` Game para que ela se tornasse opcional, porém como na possibilidade dessa prop ser opcional podemos ter o retorno esperado **ou** um retorno undefined, e por sua vez não é possível se chamar um método undefined.

Para essa possibilidade funcionar, nós precisaremos validar que esse método realmente vai existir quando for chamado, chamamos isso de **type guard**. Exemplo:

```typescript
...

if(tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}

...
```

Conseguimos também implementar uma classe baseada numa `interface`, assim a classe precisa ter todos os tipos definidos da interface definida. Exemplo:

```typescript
class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
```
</details>

------

## **Type Alias vs Interface**

<details><summary>Veja mais</summary>

1. **Definição**
```typescript
//Type Alias
type Game = {
  title: string;
}

type DLC = {
  extra: string;
}

//Interface
interface Game {
  title: string;
}

interface DLC {
  extra: string;
}
```

2. **Intersection / Extend**
```typescript
//Type Alias
type GameCollection = Game & DLC;

//Interface
interface GameCollection extends Game, DLC {...}
```

3. **Implements**
```typescript
//Type Alias e Interface
class CreateGame implements GameCollection {...}
```

4. **Declarar funções**
```typescript
//Type Alias
type getSimilars = (title: string) => void;

//Interface
interface getSimilars {
  (title: string): void;
}
```

<details><summary>Principais diferenças</summary>

1. Na parte da declaração, no `type alias` nós conseguimos declarar os tipos primitivos, já na interface não.
```typescript
//Type Alias
//permite declarar tipos primitivos
type ID = string | number;
```

Se quisermos estender uma interface com um `number` não conseguiremos, pois ele apresenta um erro e diz que só estamos nos referindo a um tipo. Exemplo:
```typescript
//Interface
interface ID extends number {}
```
2. Com o `type alias` conseguimos declarar tuplas normalmente
```typescript
//Type Alias
type Tuple = [number, number];
//como definimos somente dois elementos na tupla,
//nesse caso será informado um erro
//pois ele limita realmente os valores
[1, 2, 3] as Tuple;
```

Já no caso da `interface`, se criarmos uma tupla com _chave/valor_ ele nos deixará adicionarmos quantos valores quisermos. Exemplo:

```typescript
//Interface
interface Tuple {
  0: number;
  1: number;
}

//aqui se passarmos quantos valores a mais quisermos,
//sem nos importarmos com o tipo
//ele irá adicionar normalmente sem erros
//por isso não consiguimos definir tuplas na interface
[1, 2, 3, "string"] as Tuple;
```

3. **Declaração por escopo**

- `type alias`: só é permitido uma única declaração por escopo.
- `interface`: podemos ter múltiplas declarações por escopo que ele irá unir no mesmo nome.

```typescript
//Type Alias
//aqui ele não vai permitir que nós estendamos
//esse type com o mesmo nome para reutilizarmos 
//ou adicionarmos mais coisas
type JQuery = { a: string };
type JQuery = { b: string };

//Interface
//nesse caso ele vai "mergear" esses dois tipos 
//com o mesmo nome, então ele acaba ficando 
//tanto com o tipo "a" quanto o tipo "b".
interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: 'bla',
  b: 'foo'
}
```

</details>

### **Conclusão**

Caso estejamos criando uma lib que precise ser extensível, onde já temos métodos e pessoas queiram estendê-la e criar outros novos, usaremos a `interface`, porque ela irá permitir que eles sejam "mergeados" a ela.

Quando estivermos criando mais objetos/classes (POO) prefira utilizar `interface`.

O `type alias` se torna mais prático para utilizar os tipos primitívos, com ele precisamos escrever menos e na maioria das vezes ele é mais recomendado iniciar um projeto utilizando ele e caso mais pra frente precisemos estender ou transformar em alguma lib separada mudamos para a `interface`.

</details>

------

## **Generics**

<details><summary>Veja mais</summary>

Uma das coisas mais importantes de quando escrevemos código é tentar fazer ele o mais reutilizavel possível, para conseguirmos atingir esse objetivo nós precisamos criar os nossos métodos mais _genéricos_.

Precisamos fazer com que ele aceite vários tipos de entradas, argumentos e tudo mais para termos o resultado definido.

É para isso que em meio uma linguagem tipada onde já definimos fortemente os tipos logo no começo que existem os **generics**.

Abaixo temos uma função que permite que entremos com dois tipos de dados, `number` ou `string`:

```typescript
function useState() {
  let state: number | string;

  function getState() {
    return state;
  }

  function setState(newState: number | string) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

newState.setState(123)
console.log(newState.getState())

newState.setState('foo')
console.log(newState.getState())
```

Assim podemos entrar com dois tipos de dados que irá funcionar, porém e se quisermos que após entrar o primeiro tipo de dado somente ele seja o correto?

Por exemplo, se iniciarmos com uma `string` da próxima vez que tentarmos passar o tipo de dado ele não aceite mais o `number`, pois o tipo vai foi definido anteriormente. Nesse momento entra o **generic**:

```typescript
function useState<S>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

...
```

Repare que antes dos `()` colocamos os símbolos de `<>`, ali nós iremos passar os nossos tipos, em geral nós usamos certas letras para poder significar alguma coisa, não é uma regra a letra que nós poderemos usar, porém por convenção algumas letras já são utilizadas, elas são:

```typescript
// letra => o que ela quer dizer
S => State
T => Type
K => Key
V => Value
E => Element
```

Essas letras não são obrigatórias, nós podemos utilizar o que quisermos. Elas representam que vamos poder trabalhar com algo do tipo "letra".

Podemos ver que o código funciona normalmente, porém ainda está aceitando os dois tipos de entradas, isso porque não definimos o que será esse `S`. Se passarmos o mouse em cima da função podemos ver que temos um novo `type` que não chegamos a ver antes, o `unknown`.

O tipo `unknown` é bem parecido com o tipo `any`, pois o `any` aceita qualquer coisa, nele você também passar qualquer coisa, a diferença é que no momento que definirmos o tipo dele, ele será somente aquilo. Por exemplo:

```typescript
...

const newState = useState<boolean>();

//essa opção continua funcionando normalmente
newState.setState(true)
console.log(newState.getState())

//repare que como definimos o useState como boolean
//essa opção parou de funcionar
newState.setState(123)
console.log(newState.getState())

//repare que como definimos o useState como boolean
//essa opção parou de funcionar
newState.setState('foo')
console.log(newState.getState())
```

Se quisermos manter na ideia inicial dessa função ser somente `string` ou `number`, para evitar que qualquer coisa diferente seja passada, podemos ainda limitar essas possibilidades assim:

```typescript
function useState<S extends number | string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

...
```

Quando fazemos isso dizemos que o nosso `S` vai estender dos tipos `string` ou `number`, assim a função não aceitará nada fora dessas opções.

Podemos ainda evitar de passar a opção na hora de utilizar o nosso **setState()** caso não queiramos passar nada ou se quisermos já iniciar com um padrão, fazendo da seguinte maneira:

```typescript
function useState<S extends number | string = number>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

...
```

Só temos que ficar atentos, com esse `=`, ele não tem relação com a parte anterior da `extends`, para facilitar a nossa leitura e evitar um nó na cabeça podemos declarar de outras maneiras, por exemplo:

```typescript
type numOrStr = number | string;

function useState<S extends numOrStr = number>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

...
```

Isso não nos impede de passarmos o tipo que desejamos na hora de iniciar nosso `useState()`, ele somente inicia com o padrão de `number` como foi definido previamente.

</details>

------

## **Type utilities**

<details><summary>Veja mais</summary>

Se criarmos um todo list como o do exemplo abaixo e depois quisermos alterar seu estado para completo, poderiamos fazer dessa maneira normalmente:

```typescript
type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo: Todo = {
  title: 'Assistir Dark de novo',
  description: 'Relembrar os detalhes',
  completed: false
}

console.log(todo);

todo.completed = true;

console.log(todo);
```

Isso pode ser ok em alguns momentos, porém aqui acabamos de mutar o valor desse objeto, isso pode nos causar alguns side effects ou problemas no futuro também.

Outro jeito de fazer isso seria criar uma função que gerasse um novo objeto a partir do objeto anterior, assim trabalhamos com o principio do conceito da `imutabilidade`.

Primeiramente nós podemos utilizar um **type utility** onde primeiramente criamos o objeto e dizemos que depois de criado ele não poderá mais ser modificado. Exemplo:

```typescript
type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo: Readonly<Todo> = {
  title: 'Assistir Dark de novo',
  description: 'Relembrar os detalhes',
  completed: false
}

...
```

Desse jeito ele não permitirá que modifiquemos a prop `completed` como fizemos acima, pois ele está configurado para somente leitura.

Agora podemos resolver essa situação criando uma função que retorna um objeto novo:

<details><summary>Partials</summary>

```typescript
...

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo, ...fieldsToUpdate}
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2)

```

Aqui criamos uma função que recebe dois parâmetros, o `todo` e o `fieldsToUpdate`, onde o `todo` trás todo o objeto anterior e o `fieldsToUpdate` recebe uma parte "parcial" do `type Todo`. Isso quer dizer que esse "Partial" deixa todos os campos como sendo opcionais naquele momento, sem mexer no type principal que já existe, assim permitindo que nós alteremos só o que precisarmos/quisermos.

> Importante prestarmos atenção no detalhe de que não podemos passar campos novos nesse `fieldsToUpdate`, ele somente deixa opcionais os campos já existentes, não nos permite criar nada novo.

Imagine que estamos criando agora um componente onde só queremos mostrar o título e o estado (completo/incompleto), deixando a descrição de lado. Para isso temos o **type utility** `Pick`.

</details>

<details><summary>Pick</summary>

```typescript
...

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo3: TodoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: false
}

console.log(todo3)
```

No `Pick` nós passamos qual o nosso **type** e quais as props dele queremos mostrar.

Seguindo essa linha, também temos uma maneira de fazer o caminho inverso com o **type utility** `Omit`.

</details>

<details><summary>Omit</summary>

```typescript
...

type TodoPreview2 = Omit<Todo, 'description'>

const todo4: TodoPreview2 = {
  title: 'Fechar Ghost of Tsushima',
  completed: false
}

console.log(todo4);
```

Podemos perceber que eles funcionam de maneiras bem similares.

</details>

### **Por isso quando devemos utilizar `Pick` ou `Omit`?**

Isso é meio fácil de decidir, nesse type que foi criado temos somente 3 campos, porém imagine algum type que tenha muito mais opções, se quisermos visualizar mais coisas será mais fácil utilizar o `Omit` para esconder o que não queremos mostrar e no caso contrário, se quisermos omitir mais coisas será mais fácil utilizar o `Pick` e selecionarmos o que queremos mostrar.

Reperem que o processo nesse ponto é o inverso, porém não tão confuso.

</details>

------

## **Decorators**

<details><summary>Veja mais</summary>

Para começarmos a utilizar os `decorators`, que ainda não são lançados oficialmente na linguagem nós precisaremos editar novamente o nosso `tsconfig.json`:

```json
{
  //ativando essa opção nós poderemos
  //utilizar os decorators no typescript
  "experimentalDecorators": true,
}
```

O `decorator` vai trabalhar em cima das partes anotadas para que consigamos adicionar coisas novas, podendo ficar de olho nesse elemento novo para caso ele altere ou precise de alguma validação, coisas desse tipo. 

### Como se cria um decorator?

Basta criarmos uma simples função, a diferença é que ela recebe alguns parâmetros por default baseado em cada decorator com qual estamos trabalho. 

Exemplos:

<details><summary>Class Decorator</summary>

```typescript
function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

//decorator - anotar a versão da API
@setAPIVersion('1.0.0')
class API {}

console.log(new API())
```

</details>

<details><summary>Property Decorator</summary>

```typescript
//Property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val;

    const setter = (value: string) => {
      if(value.length < length) {
        console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.`)
      } else {
        val = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Movie {
  //validação - se for menor que 5 letras - error
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Interstellar')
console.log(movie.title);
```

</details>

<details><summary>Method Decorator</summary>

```typescript
//Method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      console.log(`Esperando ${ms}`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms);

      return descriptor;
    }
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  //esperar um tempo e aí vai rodar o método (ms)
  @delay(2000)
  greet() {
    console.log(`Hello! ${this.greeting}`)
  }

}

const pessoa = new Greeter('Pessoinha!')
pessoa.greet()
```

</details>

</details>