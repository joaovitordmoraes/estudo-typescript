//accountInfo
//charInfo
//playerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
}

const account: AccountInfo = {
  id: 1,
  name: 'João',
  email: 'teste@teste.com'
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: 'Link',
  level: 100
}

//intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 1,
  nickname: 'Link',
  level: 100,
  name: 'João',
  email: 'teste@teste.com'
}