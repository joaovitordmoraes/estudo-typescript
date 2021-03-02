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

// const foo = new UserAccount('Link', 100)
// console.log(foo)
// foo.logDetails()

const matt = new CharAccount('Matt', 45, 'Link', 100)
console.log(matt)
console.log(matt.level)
matt.logDetails()

matt.setLevel = 499

console.log(matt.getLevel)