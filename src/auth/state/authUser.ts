import { atom} from 'recoil'

export const authUserState = atom<object>({
  key: 'authuserState',
  default: {}
})