import { atom} from 'recoil'

export const authUserState = atom<string>({
  key: 'authuserState',
  default: ''
})